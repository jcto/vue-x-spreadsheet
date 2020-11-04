<template>
  <div>
    <vue-x-spreadsheet
      @getInstance="getInstance"
      :options="options"
      :data="sheetsData"
    >
      <template v-slot:a><span>a</span></template>
      <template v-slot:btn><span @click="getData">获取数据</span></template>
      <template v-slot:default><span>default</span></template>
    </vue-x-spreadsheet>
  </div>
</template>
<script>
const rows10 = { len: 1000 };
for (let i = 0; i < 1000; i += 1) {
  rows10[i] = {
    cells: {
      0: { text: "A-" + i },
      1: { text: "B-" + i },
      2: { text: "C-" + i },
      3: { text: "D-" + i },
      4: { text: "E-" + i },
      5: { text: "F-" + i },
    },
  };
}
const rows = {
  len: 80,
  1: {
    cells: {
      0: { text: "testingtesttestetst" },
      2: { text: "testing" },
    },
  },
  2: {
    cells: {
      0: { text: "render", style: 0 },
      1: { text: "Hello" },
      2: { text: "haha", merge: [1, 1] },
    },
  },
  8: {
    cells: {
      8: { text: "border test", style: 0 },
    },
  },
};

export default {
  data() {
    return {
      options: {
        locale: "zh-cn",
        showToolbar: true,
        showGrid: true,
      },
      name: "a",
      sheetsData: [],
    };
  },
  created() {
    this.sheetsData = [
      {
        freeze: "B3",
        styles: [
          {
            bgcolor: "#f4f5f8",
            textwrap: true,
            color: "#900b09",
            border: {
              top: ["thin", "#0366d6"],
              bottom: ["thin", "#0366d6"],
              right: ["thin", "#0366d6"],
              left: ["thin", "#0366d6"],
            },
          },
        ],
        merges: ["C3:D4"],
        cols: {
          len: 10,
          2: { width: 200 },
        },
        rows,
      },
      { name: "sheet-test", rows: rows10 },
    ];
  },
  methods: {
    getInstance(instance) {
      this.instance = instance;
      console.log("获取数据");
      console.log(instance.getData());
    },
    getData() {
      console.log("获取数据");
      console.log(this.instance.getData());
      //   this.instance.getData()
    },
  },
};
</script>
