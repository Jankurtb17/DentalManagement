<template>
  <div class="calendar">
    <FullCalendar class="calendar" :options="calendarOptions" @dateClick="handleDateClick">
      <template v-slot:eventContent='arg'>
      <b>{{ arg.event.title }}</b>
    </template>

      <el-scrollbar height="90vh">
      </el-scrollbar>
    </FullCalendar>
  </div>

  <AppModal title="Create an Event" v-model="isOpen">
    <template #body>
      <el-form :model="form">
        <el-form-item label="Event name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </template>
  </AppModal>
</template>

<script lang="ts" setup>
import { uuid } from 'vue-uuid'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AppModal from "./AppModal.vue"
import type {
  CalendarOptions,
  EventApi,
  EventInput,
  DateSelectArg,
  EventClickArg
} from '@fullcalendar/core'
import { reactive, ref } from 'vue'
const form = reactive({
  name: ''
})
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
  events: currentEvents.value
} as CalendarOptions)

function handleEventClick(clickInfo: EventClickArg) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

const handleDateClick = (info: any) => {
  isOpen.value = !isOpen.value
}

function handleDateSelect(selectInfo: DateSelectArg) {
  isOpen.value = !isOpen.value
  let calendarApi = selectInfo.view.calendar
  calendarApi.unselect() // clear date selection
  if (!isOpen.value) {
    calendarApi.addEvent({
      id: uuid.v4(),
      title: form.name,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
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

</style>

<style>
.fc .fc-daygrid-day.fc-day-today, .fc .fc-timegrid-col.fc-day-today{
  background-color: #fff; /* Replace with your desired blueish color */
}
</style>
