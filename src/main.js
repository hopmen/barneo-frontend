import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);



import 'materialize-css/js/global'

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');

