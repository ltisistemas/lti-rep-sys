import { Injectable } from '@angular/core';
import { Estabelecimento } from 'src/app/core/models/estabelecimento';
import { UsuarioEstabelecimento } from 'src/app/core/models/usuario-estabelecimento';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class NovoAgendamentoService {
  constructor(private service: FirebaseService) {}

  async listarEstabelecimentos() {
    const usuario = this.service.getUsuarioLogado();

    const usuarioEstabelecimento = await this.service.getSnapshot({
      table: environment.tabelas.usuarioEstabelecimento,
      campo: 'usuario_id',
      valor: usuario!.id,
    });

    if (usuarioEstabelecimento) {
      const estabelecimentos: Estabelecimento[] = [];

      for await (const linha of usuarioEstabelecimento.docs) {
        const doc = linha.data() as UsuarioEstabelecimento;
        const tabela = environment.tabelas.estabelecimento;
        const { estabelecimento_id } = doc;

        const find = await this.service.findById(tabela, estabelecimento_id);

        const estabelecimento = {
          ...find.data(),
          id: find.id,
        } as Estabelecimento;

        estabelecimentos.push(estabelecimento);
      }

      return estabelecimentos;
    }

    return [];
  }
}
