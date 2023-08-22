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

  <AppModal title="Appointment" v-model="isOpen">
    <template #body>
      <el-form ref="formRules" :rules="rules" :model="form" status-icon>
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="Add title"></el-input>
        </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="saveAppointment">Save</el-button>
        </el-form-item>
      </el-form>
    </template>
  </AppModal>
</template>

<script lang="ts" setup>
import { uuid } from 'vue-uuid'
import type { FormInstance, FormRules } from 'element-plus'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AppModal from './AppModal.vue'
import type {
  CalendarOptions,
  EventApi,
  EventInput,
  DateSelectArg,
  EventClickArg
} from '@fullcalendar/core'
import { reactive, ref, watch } from 'vue'

const rules = reactive<FormRules>({
  name: [
    {
      trigger: 'blur',
      required: true,
      message: 'Please enter a label'
    }
  ]
})

interface FormType {
  name: string
}
const calendar = ref()
const formRules = ref()
const form = reactive<FormType>({
  name: ''
})
const isSaved = ref(false)
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
const isOpen = ref(false)
const INITIAL_EVENT = ref([
  {
    id: uuid.v4,
    title: 'All-day event',
    start: todayStr,
    display: 'block'
  },
  {
    id: uuid.v4,
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
])
const startDate = ref('')
const endDate = ref('')
const allDay = ref(false)

const currentEvents = ref([{ title: 'Meeting', start: new Date() }] as EventApi[])
const calendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  themeSystem: 'bootstrap5Plugin',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  editable: true,
  selectable: true,
  selectMirror: true,
  // eventDisplay: 'block',
  eventColor: '#445ec1',
  dayMaxEvents: true,
  weekends: true,
  initialEvents: INITIAL_EVENT,
  select: handleDateSelect,
  eventClick: handleEventClick,
  events: currentEvents.value,
  nowIndicator: true
} as CalendarOptions)

function handleEventClick(clickInfo: EventClickArg) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

function handleDateSelect(selectInfo: DateSelectArg) {
  isOpen.value = !isOpen.value
  let calendarApi = selectInfo.view.calendar
  startDate.value = selectInfo.startStr
  endDate.value = selectInfo.endStr
  allDay.value = selectInfo?.allDay
  calendarApi.unselect()
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
          title: form.name,
          start: startDate.value,
          end: endDate.value,
          allDay: allDay.value
        }
        calendarApi.addEvent(newEvent)
        form.name = ''
        isOpen.value = false
      }
    }
  })
}
</script>

<style scoped>
.calendar {
  height: 90vh;
}

.current-time-indicator {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid red;
  pointer-events: none;
}

.time-range {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
.el-form-item__content {
  display: flex;
  justify-content: flex-end;
}
.fc .fc-daygrid-day.fc-day-today,
.fc .fc-timegrid-col.fc-day-today {
  background-color: #fff; /* Replace with your desired blueish color */
}

.fc-timegrid-event-harness, .fc-daygrid-day-events {
  margin: 0 15px;
}

.fc-timegrid-now-indicator-arrow {
  border-radius: 50px;
}
</style>
