import Vue from 'vue';
import XSpreadsheet from './vueXSpreadsheet.vue'
export default {
    install(Vue){
        Vue.component(XSpreadsheet.name,XSpreadsheet)
    }
}