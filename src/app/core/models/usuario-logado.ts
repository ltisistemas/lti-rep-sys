export class UsuarioLogado {
  id: string;
  empresa_id: number | string;
  nome: string;
  email: string;
  password?: string;
  status?: 'ATIVO' | 'INATIVO';

  constructor(t: UsuarioLogado) {
    this.id = t.id;
    this.empresa_id = t.empresa_id;
    this.password = t.password;
    this.nome = t.nome;
    this.email = t.email;
    this.status = t.status;
  }
}
