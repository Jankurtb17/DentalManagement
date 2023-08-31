<template>
  <div>
    <v-chart class="chart"  style="height: 330px; width: 100%;"  :option="option" autoresize />
  </div>
</template>

<script lang="ts" setup >
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart,  } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted, reactive } from 'vue'
import * as chart from 'echarts'
type EchartsOption = chart.EChartsOption
const echarts = ref()
use([
  LineChart,
  ToolboxComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
])

provide(THEME_KEY, 'light')

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
} as EchartsOption;

onMounted(() => {
  setInterval(() => {
  option
  }, 3000)
})



</script>

<style scoped>
.chart {
  height: 100%;
  /* width: 100%; */
}
</style>