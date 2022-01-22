import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

//import "primevue/resources/themes/md-light-indigo/theme.css"; //Theme
import "primevue/resources/themes/lara-light-indigo/theme.css" //Theme
import 'primevue/resources/primevue.min.css'; //Core CSS
import 'primeicons/primeicons.css'; // Icons

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(PrimeVue, {ripple: true});

