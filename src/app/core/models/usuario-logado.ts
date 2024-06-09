export class UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  password?: string;
  status?: 'ATIVO' | 'INATIVO';
  perfil: 'REPRESENTANTE' | 'ADMIN';

  constructor(t: UsuarioLogado) {
    this.id = t.id;
    this.password = t.password;
    this.nome = t.nome;
    this.email = t.email;
    this.status = t.status;
    this.perfil = t.perfil;
  }
}
