import InicioComponent from './components/inicio.vue';

//como queremos usarlo en otgro archivo que no sea este , lo exportamos
export const rutas = [
  { path: '',component: InicioComponent} //cuadno alguien escriba /usuarios vamos a utilizar ciertos componentes
  //Hay qye crear InicioComponent
];
