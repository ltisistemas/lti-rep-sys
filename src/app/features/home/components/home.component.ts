import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UsuarioLogado } from 'src/app/core/models/usuario-logado';
import { UtilsService } from 'src/app/core/utils/utils.service';
import { UsuarioLogadoUsecaseService } from 'src/app/shared/services/usuario-logado-usecase.service';
import { environment } from 'src/environments/environment';
import { IDay } from '../entities/day';
import { DarkThemeService } from 'src/app/shared/services/dark-theme.service';
import { PedidoEstoqueComponent } from '../../pedido-estoque/components/pedido-estoque.component';
import { ResultDialog } from 'src/app/core/models/result-dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = false;
  isLogged = false;
  currentApplicationVersion = environment.appVersion;

  usuarioLogado: UsuarioLogado;
  title = 'LTI PDV';
  tituloAlterado = false;

  diasDaSemana: IDay[] = [];
  today = moment(new Date()).locale('America/Recife');
  isDarkMode = false;

  menuItens = [
    {
      route: '/',
      icon: 'home',
      label: 'Pagina inicial',
      visible: true,
    },
    {
      route: 'clientes',
      icon: 'contact_page',
      label: 'Clientes',
      visible: true,
    },
    {
      route: 'fornecedores',
      icon: 'contact_page',
      label: 'Fornecedores',
      visible: true,
    },
    {
      route: 'usuarios',
      icon: 'group',
      label: 'Usuários',
      visible: true,
    },
    {
      route: 'usuarios-fornecedor',
      icon: 'group',
      label: 'Usuários Fornecedor',
      visible: true,
    },
    // {
    //   route: 'minhas-cotacoes',
    //   icon: 'post_add',
    //   label: 'Minhas Cotações',
    //   visible: true,
    // },
    {
      route: 'login',
      icon: 'logout',
      label: 'Sair',
      visible: true,
    },
  ];

  get visibleMenu() {
    return this.menuItens.filter((f) => f.visible);
  }

  constructor(
    private router: Router,
    private usuarioLogadoService: UsuarioLogadoUsecaseService,
    private utils: UtilsService,
    private darkThemeService: DarkThemeService
  ) {
    this.usuarioLogado = this.usuarioLogadoService.buscarUsuarioLogado();

    const token = localStorage.getItem(environment.storage.token);
    this.isLogged = !!!(token === null);
    this.darkThemeService.darkTheme$
      .asObservable()
      .subscribe((state) => (this.isDarkMode = state));
  }

  ngOnInit() {
    this.generateDays();
    this.intervalDays();

    this.utils.setSize();
  }

  go(route: string, drawer?: any) {
    this.router.navigateByUrl(route);
    if (drawer) drawer.toggle();
  }

  intervalDays() {
    const timeout = 1000 * 60 * 60 * 24;
    setInterval(() => this.generateDays(), timeout);
  }

  private generateDays() {
    const dias = [
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sabado',
      'Domingo',
    ];

    const currentDay = this.today;
    const segundaFeira = currentDay.clone();
    segundaFeira.subtract(currentDay.day() - 1, 'days');

    this.diasDaSemana = [
      {
        dia: dias[0],
        data: segundaFeira,
        current: false,
        day: segundaFeira.day(),
        formated: segundaFeira.format('DD/MM/YYYY'),
        index: 0,
        isToday: false,
      },
    ];

    for (let d = 1; d < 7; d++) {
      const day = {
        dia: dias[d],
        data: this.diasDaSemana[0].data.clone().add(d, 'days'),
        current: false,
        day: 0,
        formated: '',
        index: d,
        isToday: false,
      } as IDay;

      day.formated = day.data.format('DD/MM/YYYY');
      day.day = day.data.day();

      this.diasDaSemana.push(day);
    }

    this.diasDaSemana.map((d) => {
      d.current =
        d.data.format('DD/MM/YYYY') == currentDay.format('DD/MM/YYYY');
      d.isToday = !!d.current;
    });

    (window as any).diasDaSemana = this.diasDaSemana;
  }
  getDiaDaSemana(d: moment.Moment) {
    return d.format('DD');
  }
  selectDay = (day: IDay) => this._selectDay(day);
  private _selectDay(day: IDay) {
    this.diasDaSemana.map((d) => (d.current = false));

    this.diasDaSemana[day.index].current = true;
  }
  selectToday = () => this._selectToday();
  private _selectToday() {
    this.diasDaSemana.map((d) => (d.current = false));

    this.diasDaSemana.filter((f) => f.isToday).map((m) => (m.current = true));
  }

  abrirModalNovoPedido() {
    const ref = this.utils.abrirModal({
      component: PedidoEstoqueComponent,
      data: {},
    });
    ref.afterClosed().subscribe({
      next: (result: ResultDialog) => {
        if (!result.closed) {
        }
      },
      error: (err: any) => {
        this.utils.message('Erro ao salvar os dados!');
      },
    });
  }

  abrirModalCliente() {
    // this.utils.abrirModal({
    //   component: ClientesComponent,
    //   data: {},
    // });
  }
  abrirModalProdutos() {
    // this.utils.abrirModal({
    //   component: ProdutosComponent,
    //   data: {},
    // });
  }

  setDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    this.darkThemeService.darkTheme$.next(this.isDarkMode);
  }
}
