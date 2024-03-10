<template>
  <el-row class="header">
    <div>
      <el-avatar :size="100" :src="url" />
    </div>
    <!-- <div v-if="isLoading"> -->
    <el-skeleton style="width: 300px; margin-top: 10px" :loading="loading" :count="1">
      <template #template>
        <div style="display: flex; flex-direction: column; gap: 10px">
          <el-skeleton-item variant="h1" animated style="width: 83%" />
          <div style="display: flex; flex-direction: row; gap: 10px">
            <el-skeleton-item variant="h1" style="width: 40%; height: 40px" />
            <el-skeleton-item variant="h1" style="width: 40%; height: 40px" />
          </div>
        </div>
      </template>
      <template #default>
        <div class="patient-info">
          <div>
            <h3>{{ appointment?.email }}</h3>
          </div>
          <div v-if="isCompleted">
            <el-tag effect="light" type="success"> Procedure completed </el-tag>
          </div>
          <div class="btn" v-else>
            <el-button type="success" @click="done">Done</el-button>
            <el-button>Cancelled</el-button>
          </div>
        </div>
      </template>
    </el-skeleton>

    <!-- </div> -->
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
        <h2>{{ appointment.procedure }}</h2>
      </div>
    </el-col>
  </el-row>
  <AppointmentTimeline />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import AppointmentTimeline from '@/components/CalendarComponent/AppointmentTimeline.vue'
import useAppointment, { type AppointmentStatus } from '@/composables/Appointment'
import type { Appointment } from '@/services/appointment'
import { ElMessage, ElMessageBox } from 'element-plus'
const { updateAppointment } = useAppointment()
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const props = defineProps({
  appointment: {
    type: Object as () => Appointment
  },
  loading: {
    type: Boolean
  }
})

const isCompleted = computed(() => {
  return props.appointment?.status === 'completed'
})

const emits = defineEmits<{
  (e: 'close'): void
}>()
const done = async () => {
  const updAppointment = {} as Appointment
  Object.assign(updAppointment, props.appointment)
  updAppointment.status = 'completed'

  await updateAppointment(props.appointment?._id as string, updAppointment)
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Procedure completed'
      })
      emits('close')
    })
    .catch((e) => {
      ElMessage({
        type: 'error',
        message: `${e}`
      })
    })
}
</script>

<style scoped>
.el-row.header {
  display: grid;
  grid-template-columns: 110px 1fr 1fr;
}

.patient-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
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
