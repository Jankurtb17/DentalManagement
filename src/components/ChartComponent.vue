<template>
  <div class="chart" >
    <el-row>
      <canvas id="myChart"></canvas>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'
const data = ref([
  { month: 'January', count: 10 },
  { month: 'February', count: 20 },
  { month: 'March', count: 30 },
  { month: 'April', count: 40 },
  { month: 'May', count: 50 },
  { month: 'June', count: 40 },
  { month: 'July', count: 30 },
  { month: 'August', count: 50 },
  { month: 'September', count: 60 },
  { month: 'October', count: 80 },
  { month: 'November', count: 20 },
  { month: 'December', count: 50 }
])

const dataSet = {
  labels: data.value.map((row) => row.month),
  datasets: [
    {
      label: `Total Patients`,
      data: data.value.map((row) => row.count),
      backgroundColor: '#9BD0F5',
      borderWidth: 1,
      color: '#000',
    }
  ]
}

const options = {
  // Customize text color for different elements
  plugins: {
    title: {
      display: true,
      text: 'Total Patients by month in the year of 2023',
      color: 'white' // Change the title text color to red
    },
    legend: {
      labels: {
        color: 'white' // Change the legend text color to blue
      }
    },
    tooltip: {
      callbacks: {
        labelColor: () => {
          return {
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: 'orange' // Change tooltip background color to orange
          }
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'white' // Change x-axis label text color to green
      }
    },
    y: {
      ticks: {
        color: 'white' // Change y-axis label text color to purple
      }
    }
  }
}

// Create the chart

onMounted(() => {
  const ctx = document.getElementById('myChart') as any
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: dataSet,
    options: options
  })
})
</script>

<style scoped>
.chart {
  background-color: #152443;
  margin-bottom: 20px;
}
</style>
