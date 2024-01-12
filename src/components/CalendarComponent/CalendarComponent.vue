<template>
  <div class="calendar">
    <FullCalendar
      ref="calendar"
      class="calendar"
      :options="calendarOptions"
      v-bind="$attrs"
      @eventClick="handleEventClick"
    >
      <template v-slot:eventContent="arg">
        <b>{{ arg.event.title }}</b>
      </template>

      <el-scrollbar height="90vh"> </el-scrollbar>
    </FullCalendar>
  </div>

  <AppModal width="30%" title="Create Appointment" v-model="isOpen">
    <template #body>
      <el-form label-position="top" ref="formRules" :rules="rules" :model="form" status-icon>
        <el-form-item name="name" label="Patient Name">
          <el-select
            filterable
            :remote-method="findUser"
            :loading="loading"
            v-model="form.name"
            style="width: 100%"
            placeholder="Patient's name"
          >
            <el-option
              v-for="user in users"
              :key="user"
              :label="user.first_name + ' ' + user.middle_name?.slice(0, 1) + '. ' + user.last_name"
              :value="user.email"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <div class="time">
          <el-form-item prop="time" label="Start time">
            <el-time-select
              v-model="form.startTime"
              :max-time="form.endTime"
              class="mr-4"
              placeholder="Start time"
              start="08:00"
              step="01:00"
              end="18:00"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="End time">
            <el-time-select
              v-model="form.endTime"
              :min-time="form.startTime"
              placeholder="End time"
              start="09:00"
              step="01:00"
              end="18:00"
              style="width: 100%"
            />
          </el-form-item>
        </div>
        <el-form-item label="Appointment Date">
          <el-input v-model="form.appointment_date" :value="startDate" disabled />
        </el-form-item>
        <el-divider />
        <el-form-item label="Procedure">
          <el-select
            filterable
            :remote-method="findProcedure"
            v-model="form.procedure"
            style="width: 100%"
          >
            <el-option
              v-for="procedure in procedures"
              :key="procedure"
              :label="procedure.label"
              :value="procedure.value"
            />
          </el-select>
        </el-form-item>
        <div class="time">
          <el-form-item label="Payment Method">
            <el-select v-model="form.payment" style="width: 100%">
              <el-option
                v-for="paymentMethod in paymentMethods"
                :key="paymentMethod.value"
                :label="paymentMethod.label"
                :value="paymentMethod.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Price">
            <el-input v-model="form.price" />
          </el-form-item>
        </div>
      </el-form>
    </template>
    <template #footer>
      <div class="btn-submit">
        <el-form-item>
          <el-button type="primary" @click="saveAppointment">Confirm Booking</el-button>
          <el-button @click="isOpen = false">Cancel</el-button>
        </el-form-item>
      </div>
    </template>
  </AppModal>

  <el-drawer v-model="drawer" title="Appointment Detail" >
    <AppointmentDetail />
  </el-drawer>
</template>

<script lang="ts" setup>
import AppointmentDetail from './AppointmentDetail.vue'
import { uuid } from 'vue-uuid'
import FullCalendar from '@fullcalendar/vue3'
import AppModal from '@/components/AppModal.vue'
import useClient from '@/composables/Clients'
import useAppointment from '@/composables/Appointment'
import type {
  DateSelectArg,
} from '@fullcalendar/core'
import { onMounted, reactive, ref, watch } from 'vue'
import type { ClientInformation } from '@/services/client'
import { useCalendar } from '@/components/CalendarComponent/hooks/useCalendar'
import { useCalendarForm, caseType, type ListOptionItem } from "@/components/CalendarComponent/hooks/useForm"
const {
  calendarOptions,
  handleEventClick,
  getDataEvents,
  allEvents,
  isOpen,
  isSaved,
  startDate,
  endDate,
  drawer
} = useCalendar()
const { createAppointment, getAppointments } = useAppointment()
const { getAllClients } = useClient()
const { form, rules } = useCalendarForm()
const payment = ['Card', 'Maya', 'Gcash', 'GoTyme', 'Cash']
const procedures = ref<ListOptionItem[]>([])
const paymentMethods = ref<ListOptionItem[]>([])
const allDay = ref(false)
const users = ref([] as ClientInformation[])
const calendar = ref()
const formRules = ref()

const getUsers = async () => {
  users.value = await getAllClients()
}

const loading = ref(false)
const findUser = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      users.value = users.value.filter((item) => {
        return (
          item.first_name.toLowerCase().includes(query.toLowerCase()) ||
          item.last_name.toLowerCase().includes(query.toLowerCase())
        )
      })
    }, 200)
  }
}

const findProcedure = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      procedures.value = procedures.value.filter((item) => {
        return item.includes(query.toLowerCase())
      })
    }, 200)
  }
}

const saveAppointment = (info: DateSelectArg) => {
  isSaved.value = true
  const calendarApi = calendar.value.getApi()
  if (formRules.value === undefined) return
  formRules.value.validate(async (isValid: any) => {
    if (isValid) {
      if (calendarApi) {
        const newEvent = {
          id: uuid.v4(),
          title: form.procedure,
          start: startDate.value,
          end: endDate.value,
          allDay: allDay.value
        }
        calendarApi.addEvent(newEvent)
        // Create Event
        const evntAppointment = {
          appointment_date: startDate.value,
          email: form.name,
          start_time: form.startTime,
          end_time: form.endTime,
          procedure: form.procedure,
          payment_method: form.payment,
          price: form.price,
          cancelled: false
        }
        await createAppointment(evntAppointment)
        form.name = ''
        isOpen.value = false
      }
    }
  })
}

onMounted(() => {
  getUsers()
  getDataEvents().then(() => {
    // After fetching data, update the FullCalendar options
    calendarOptions.initialEvents = allEvents.value as any
    calendarOptions.events = allEvents.value as any
  })
  procedures.value = caseType.map((item) => {
    return { value: `${item}`, label: `${item}` }
  })
  paymentMethods.value = payment.map((item) => {
    return { value: `${item}`, label: `${item}` }
  })
})
</script>

<style scoped>
.calendar {
  height: 90vh;
}

.time {
  display: flex;
  gap: 80px;
  width: 100%;
}

.btn-submit {
  display: flex;
  justify-content: flex-end;
}
.current-time-indicator {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid red;
  pointer-events: none;
}

/* .time-range {
  width: 100%;
  display: flex;
  justify-content: space-between;
} */

.btn-group {
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
/* .el-form-item__content {
  display: flex;
  justify-content: flex-end;
} */
.fc .fc-daygrid-day.fc-day-today,
.fc .fc-timegrid-col.fc-day-today {
  background-color: #fff; /* Replace with your desired blueish color */
}

.fc-timegrid-event-harness,
.fc-daygrid-day-events {
  margin: 0 15px;
}

.fc-timegrid-now-indicator-arrow {
  border-radius: 50px;
}
</style>
