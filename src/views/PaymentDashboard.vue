<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Calendar /></el-icon>
      <span>Payment Dashboard</span>
    </template>
    <template #body>
      <div class="payment">
        <div class="row-one">
          <!-- Customer Card -->
          <CardComponent :hasHeaderTitle="false">
            <template #body>
              <div class="customer">
                <div class="customer-info">
                  <label class="text-gray">Customer</label>
                  <el-icon class="user-icon" :size="30"><User class="icons" /></el-icon>
                </div>
                <span class="customer-total">50</span>
                <div class="customer-percent">
                  <el-icon color="#58B187" :size="20"><Top /></el-icon>
                  <span class="percent text-gray">6.5% Since last month</span>
                </div>
              </div>
            </template>
          </CardComponent>
           <!-- Revenue Card -->
          <CardComponent :hasHeaderTitle="false">
            <template #body>
              <div class="customer">
                <div class="customer-info">
                  <label class="text-gray">Revenue</label>
                  <el-icon class="revenue-icon" color="#7EC2C6" :size="30"><Wallet class="icons"/></el-icon>
                </div>
                <span class="customer-total">P100, 000</span>
                <div class="customer-percent">
                  <el-icon color="#58B187" :size="20"><Top /></el-icon>
                  <span class="percent text-gray">6.5% Since last month</span>
                </div>
              </div>
            </template>
          </CardComponent>
          <CardComponent :hasHeaderTitle="false">
            <template #body>
              <div class="customer">
                <div class="customer-info">
                  <label class="text-gray">Profit</label>
                  <el-icon class="user-icon" :size="30"><Money class="icons" /></el-icon>
                </div>
                <span class="customer-total">20%</span>
                <div class="customer-percent">
                  <el-icon color="#58B187" :size="20"><Top /></el-icon>
                  <span class="percent text-gray">6.5% Since last month</span>
                </div>
              </div>
            </template>
          </CardComponent>
          <CardComponent :hasHeaderTitle="false">
            <template #body>
              <div class="customer">
                <div class="customer-info">
                  <label class="text-gray">Customer</label>
                  <el-icon class="user-icon" :size="30"><User class="icons" /></el-icon>
                </div>
                <span class="customer-total">1700</span>
                <div class="customer-percent">
                  <el-icon color="#58B187" :size="20"><Top /></el-icon>
                  <span class="percent text-gray">6.5% Since last month</span>
                </div>
              </div>
            </template>
          </CardComponent>
        </div>
        <div class="row-two">
          <CardComponent :hasHeaderTitle="false">
            <template #body>
          <div class="barChart">
            <v-chart class="chart" :option="barOptions" autoresize />
          </div>
            </template>
          </CardComponent>
          <CardComponent :hasHeaderTitle="false">
            <template #body>
            </template>
          </CardComponent>
        </div>
        <div class="row-three">
          <CardComponent :hasHeaderTitle="false">
            <template #body>
            </template>
          </CardComponent>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from '@/base/BaseLayout.vue'
import CardComponent from "@/components/CardComponent.vue"
import ChartComponent from '@/components/ChartComponent.vue'
import AppTable from '@/components/AppTable.vue'
import { data } from "@/composables/BarChart"
import { ref, reactive, provide, onMounted } from 'vue'
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
let barOptions = reactive({} as Chart)

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

const getData = async () => {
  Object.assign(barOptions, data)
}


onMounted(() => {
  getData
})

</script>

<style scoped>
.payment {
  display: grid;
  grid-template-rows: .7fr 2fr 1.5fr;
  gap: 10px;
  height: 91vh;
}
/* First Row card */
.row-one {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.customer {
  font-family: 'Roboto Condensed', sans-serif;
}

.customer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-gray {
  color:#b9b9c2;
}

.customer-info label {
  font-size: 18px;
  font-weight: 500;
}

.customer-info .customer-total {
  font-size: 18px;
  font-weight: 700;
}

.customer-total {
  font-size: 30px;
  font-weight: 600;
}

.customer-percent .el-icon{
  padding-top: 5px;
}

/* .customer {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

.user-icon {
  background-color: #E4E6F9;
  color: #4D5BD4;
  border-radius: 5px;
}

.revenue-icon {
  background-color: #E3F3F4;
  border-radius: 5px;
}


.icons {
  padding: 5px;
}



.row-two {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  height: 100%;
}

.barChart {
  /* height: 98vh; */
}

.row-three {
}
</style>
