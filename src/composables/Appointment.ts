import AppointmentService from "@/services/appointment";
import type { Appointment } from "@/services/appointment";
import { reactive } from "vue";

export interface AppointmentStatus {
  isLoading: boolean
  code: number
  message: string
}

export const useAppointment = () => {
  const appointmentApi = AppointmentService
  const status = reactive({} as AppointmentStatus)
  const createAppointment = (evt: Appointment) => {
    status.isLoading = true
    const appEvent = appointmentApi.createAppointment(evt)
      .then((response) => response.data)
      .catch((e) => {
        status.message = e
        throw e
      })
      .finally(() => {
        status.isLoading = false
      })
    return appEvent
  }

  const getAppointments = () => {
    status.isLoading = true
    const appEvent = appointmentApi.getAllAppointment()
      .then((response) => response.data)
      .catch((e) => {
        status.message = e
        throw e
      })
      .finally(() => {
        status.isLoading = false
      })
    return appEvent
  }

  return { 
    createAppointment,
    getAppointments
  }
}

export default useAppointment