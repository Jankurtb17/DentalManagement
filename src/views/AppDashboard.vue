<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Histogram /></el-icon>
      Dashboard Overview
    </template>
    <template #body>
      <div class="dashboard">
        <!-- Left cards -->
        <div class="left-card">
          <ChartComponent :options="barOption" />
          <div class="left-card-patients">
            <el-row :gutter="20">
              <el-col>
                <CardComponent>
                  <template #header> Patients </template>
                  <template #body>
                    <div class="patients">
                      <div class="patients-stats">
                        <div class="statistic-card">
                          <div>
                            <span>Total Patients this Month</span>
                            <h5 class="count">10</h5>
                          </div>
                        </div>
                        <div class="statistic-card">
                          <div>
                            <span>Total Patients All Time</span>
                            <h5 class="count">120</h5>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="card-more">
                          <span>More</span>
                          <el-button type="primary" :icon="ArrowRight" circle />
                        </div>
                      </div>
                    </div>
                  </template>
                </CardComponent>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <CardComponent>
                  <template #header> Age Group </template>
                </CardComponent>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- Right cards -->
        <div class="right-card">
          <!-- Upcoming Request Card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header> Upcoming Appointment </template>
                <template #body>
                  <h5 class="count">51</h5>
                  <div class="card-body">
                    <div class="card-more">
                      <span>More</span>
                      <el-button type="primary" :icon="ArrowRight" circle />
                    </div>
                    <div class="card-img">
                      <img src="../assets/dot.svg" alt="" />
                    </div>
                  </div>
                </template>
              </CardComponent>
            </el-col>
          </el-row>
          <!-- Approval request card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header> Approval Appointment </template>
                <template #body>
                  <h5 class="count">51</h5>
                  <div class="card-body">
                    <div class="card-more">
                      <span>More</span>
                      <el-button type="primary" :icon="ArrowRight" circle />
                    </div>
                    <div class="card-img">
                      <img src="../assets/dot.svg" alt="" />
                    </div>
                  </div>
                </template>
              </CardComponent>
            </el-col>
          </el-row>
          <!-- Today's Appointment card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header> Today's Appointment </template>
              </CardComponent>
            </el-col>
          </el-row>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import ChartComponent from '@/components/ChartComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import BaseLayout from '@/base/BaseLayout.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'

const barHeaders = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const header = barHeaders.map((item) => item)
const barDataSet = [
  { value: 10, name: 'January' },
  { value: 5, name: 'February' },
  { value: 8, name: 'March' },
  { value: 21, name: 'April' },
  { value: 20, name: 'May' },
  { value: 29, name: 'June' },
  { value: 31, name: 'July' },
  { value: 36, name: 'August' },
  { value: 21, name: 'September' },
  { value: 20, name: 'October' },
  { value: 40, name: 'November' },
  { value: 33, name: 'December' }
]
const barOption = ref({
  tooltip: {},
  title: {
      text: 'Total Patients by month',
      left: 'center'
    },
  xAxis: {
    type: 'category',
    data: header,
    axisLabel: {
      interval: 0, // This will display all labels.
      textStyle: {
        fontSize: 10 // Adjust font size if needed.
      }
    }
  },
  yAxis: {
    type: 'value'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: header
  },
  series: [
    {
      name: 'Total patients by month',
      type: 'bar',
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      data: barDataSet,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  height: 90vh;
}

.left-card {
  height: 98vh;
  display: grid;
  grid-template-rows: 580px;
}

.left-card-patients {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 93%;
  padding-bottom: 30px;
}

.right-card {
  display: grid;
  grid-template-rows: 250px 250px 2fr;
  padding-bottom: 50px;
  gap: 20px;
}

.patients-stats {
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
}

.count {
  color: #a7a7a7;
  font-size: 2.5em;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-img {
  position: relative;
  top: 20;
  left: 10px;
  height: 80%;
}

.card-more {
  background-color: #dee5f1;
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 20px;
  justify-content: space-between;
}
</style>
