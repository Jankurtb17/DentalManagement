import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { reactive, ref, onMounted } from "vue"
import type { Appointment } from '@/services/appointment'
import useAppointment from '@/composables/Appointment'
import type {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg
} from '@fullcalendar/core'

export function useCalendar() {
  const isSaved = ref(false)
  const isOpen = ref(false)
  const allDay = ref(false) 
  const drawer = ref(false)
  const startDate = ref('')
  const endDate = ref('')
  const caseId = ref('')
  const allEvents = ref([] as EventApi[])
  const appointment = reactive({} as Appointment)
  const { getAppointments, getAppointment } = useAppointment()
  const isLoading = ref(false)
  const calendarOptions = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5Plugin',
    headerToolbar: {
    left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    eventDisplay: 'block',
    eventColor: '#445ec1',
    dayMaxEvents: true,
    weekends: true,
    initialEvents: allEvents.value,
    select: handleDateSelect,
    eventClick: handleEventClick,
    events: allEvents.value,
    nowIndicator: true
  } as CalendarOptions)

  function handleDateSelect(selectInfo: DateSelectArg) {
    isOpen.value = !isOpen.value
    let calendarApi = selectInfo.view.calendar
    startDate.value = selectInfo.startStr
    endDate.value = selectInfo.endStr
    allDay.value = selectInfo?.allDay
    calendarApi.unselect()
  }

   async function handleEventClick(clickInfo: EventClickArg) {
    drawer.value = true
    isLoading.value = true
    const data = await getAppointment(clickInfo.event.id)
    Object.assign(appointment, data)
    isLoading.value = false
  }

  const getDataEvents = async () => {
    try {
      const data = await getAppointments()
      allEvents.value = data.map((item: any) => {
        const { startHour, startMinute, endHour, endMinute } = setHours(item.start_time, item.end_time)
        const appointmentDate = item.appointment_date
        const parsedStartTime = new Date(appointmentDate)
        const parsedEndTime = new Date(appointmentDate)
        parsedStartTime.setHours(startHour, startMinute,0 ,0)
        parsedEndTime.setHours(endHour, endMinute, 0, 0)
        return {
          id: item._id,
          title: item.procedure,
          start: parsedStartTime,
          end: parsedEndTime,
          display: 'block',
          allDay: false
        }
      })
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const setHours = (startTime: string, endTime: string) => {
    const startHour = Number(startTime.slice(0,2))
    const startMinute = Number(startTime.slice(3, 5))
    const endHour = Number(endTime.slice(0,2))
    const endMinute = Number(endTime.slice(3, 5))
    return {
    startHour,
    startMinute,
    endHour,
    endMinute
    }
  }

  return {
    calendarOptions,
    handleEventClick,
    setHours,
    allEvents,
    getDataEvents,
    isOpen,
    isSaved,
    startDate,
    endDate,
    drawer,
    caseId,
    appointment,
    isLoading
  }
}