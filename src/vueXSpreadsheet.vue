<template>
  <div>
    <div id="jman-x-spreadsheet"></div>
    <div class="slots">
      <slot name="a"></slot>
      <slot></slot>
      <slot name="btn"/>
    </div>
  </div>
</template>
<script>
import "./xspreadsheet/index.less";
import x_spreadsheet from "./xspreadsheet/index";


export default {
  name: "vue-x-spreadsheet",
  props: {
    options: Object,
    data: Array,
  },
  created() {
    this.$slots;
  },

  mounted() {
    this.$slots;
     x_spreadsheet.locale(this.options.local || "zh-cn");
    delete this.options.locale
    this.x_spreadsheet = new x_spreadsheet("#jman-x-spreadsheet", this.options).loadData(
      this.data
    );
    this.$emit('getInstance',this.x_spreadsheet)
  },
};
</script>
<style scoped>
.test {
  color: red;
}
.slots {
  height: 200px;
  display: block;
}
</style>
