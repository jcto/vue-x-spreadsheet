<template>
    <div><XSSheet>
        <template v-slot:a><span>a</span></template>
        <template v-slot:default><span>default</span></template>
</XSSheet></div>
</template>
<script>
import XSSheet from './vueXSpreadsheet.vue';
export default {
    data(){
        return {
            name:'a'
        }
    },
    components:{
        XSSheet
    }
}
</script>