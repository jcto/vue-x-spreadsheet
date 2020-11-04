import Vue from 'vue'
import App from './App.vue'
import vueXSpreadsheet from './vueXSpreadsheet'
Vue.use(vueXSpreadsheet)
new Vue({
    render:h=>h(App)
}).$mount('#app')