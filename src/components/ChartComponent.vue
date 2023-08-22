<template>
  <div class="chart-container">
    <v-chart class="chart" :option="props.options" autoresize />
  </div>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  GridSimpleComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted, reactive } from 'vue'
const props = defineProps<{
  options: Chart,
}>()

let options = reactive({} as Chart)

type Chart = {
  tooltip: any,
  title: {
    text: string,
    left: string,
  },
  xAxis: {
    type: string,
    data: Array<any>,
    axisLabel: any,
  },
  yAxis: {
    type: string
  },
  legend: {
    orient: string,
    left: string,
    data: Array<any>
  },
  series: any
}

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LegendComponent
])

provide(THEME_KEY, 'dark')

onMounted(() => {
  setInterval(() => {
    Object.assign(options, props.options)
  }, 3000)
})
</script>

<style scoped>
.chart {
  /* height: 100vh; */
  height: 98%;
}
</style>
