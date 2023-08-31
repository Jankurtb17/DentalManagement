<template>
  <div>
    <v-chart class="chart"  style="height: 300px; width: 100%;"  :option="option" autoresize />
  </div>
</template>

<script lang="ts" setup >
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart,  } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted, reactive } from 'vue'
import * as chart from 'echarts'
type EchartsOption = chart.EChartsOption
const echarts = ref()
use([
  PieChart,
  ToolboxComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
])

provide(THEME_KEY, 'light')

const option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [25, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'Gcash' },
        { value: 38, name: 'Maya' },
        { value: 32, name: 'Debit/Credit Card' },
      ]
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