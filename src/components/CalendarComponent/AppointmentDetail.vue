<template>
  <el-row class="header">
    <div>
      <el-avatar :size="100" :src="url" />
    </div>
    <div class="patient-info">
      <div>
        <h1>Name</h1>
      </div>
      <div>
        <span>Email</span>
      </div>
    </div>
    <div class="btn">
      <el-button type="success">Done</el-button>
      <el-button>Cancelled</el-button>
    </div>
  </el-row>
  <el-divider />
  <el-row>
    <div>
      <el-text class="mx-1" type="info">Case Name</el-text>
    </div>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div>
        <h2>{{ caseTitle }}</h2>
      </div>
    </el-col>
  </el-row>
  <AppointmentTimeline />
</template>

<script lang="ts" setup>
import AppointmentTimeline from "@/components/CalendarComponent/AppointmentTimeline.vue"
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
defineProps({
  email: String,
  caseTitle: String
})

</script>

<style scoped>

.el-row.header {
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
}

.patient-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul.el-timeline {
  padding: 0;
  margin-top: 10px;
}
</style>
