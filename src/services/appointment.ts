import http from '@/main-http'

export interface Appointment {
  appointment_date: string
  email: string
  start_time: string
  end_time: string
  procedure: string
  payment_method?: string
  price?: number
  cancelled: boolean
}

class AppointmentService {
  createAppointment = (evt: Appointment):Promise<any> => {
    return http.post<Appointment>('/appointments', evt)
  }

  getAllAppointment = (): Promise<any> => {
    return http.get<Appointment>('/appointments')
  }
}

export default new AppointmentService()