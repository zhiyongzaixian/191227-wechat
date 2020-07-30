import Button from './Button'

const test = {
  install(Vue){
    console.log('install()');
    Vue.component('Button', Button)
  }
}


export default test;
