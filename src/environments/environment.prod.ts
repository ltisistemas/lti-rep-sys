export const environment = {
  production: true,
  appVersion: require('../../package.json').version + '-prod',
  host_page: 'http://localhost:4200',
  jwt_key: '8c74ec9e099c920eba5ba30465e76d214d565b26',
  storage: {
    token: 'lti-rep-sys-accessToken',
    usuario: 'lti-rep-sys-usuario',
  },
  tabelas: {
    empresa: 'empresa',
    usuario: 'usuario',
    clientes: 'clientes',
    produtos: 'produtos',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyDq8TbFTqXVDz6JWCnQFS-T8ZenKQ26TKI',
    authDomain: 'lti-rep-sys.firebaseapp.com',
    projectId: 'lti-rep-sys',
    storageBucket: 'lti-rep-sys.appspot.com',
    messagingSenderId: '961096563108',
    appId: '1:961096563108:web:391c9e43aa49add04be931',
    measurementId: 'G-8ZQBQEPJJ7',
  },
};
