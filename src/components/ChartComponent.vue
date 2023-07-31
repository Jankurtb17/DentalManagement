<template>
  <div class="chart-container">
    <v-chart class="chart" :option="props.options" autoresize />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  options: {
    type: any
  },
  headers: {
    type: string[]
  },
  data: {
    type: Array<any>
  }
}>()
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  GridSimpleComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

provide(THEME_KEY, 'dark')
</script>

<style scoped>
.chart {
  /* height: 100vh; */
  height: 98%;
}
</style>
