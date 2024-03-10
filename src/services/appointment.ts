import http from '@/main-http'

export interface Appointment {
  _id?: string
  appointment_date: string
  email: string
  start_time: string
  end_time: string
  procedure: string
  payment_method?: string
  price?: number
  // cancelled: boolean
  status: string
}

class AppointmentService {
  createAppointment = (evt: Appointment):Promise<any> => {
    return http.post<Appointment>('/appointments', evt)
  }

  getAllAppointment = (): Promise<any> => {
    return http.get<Appointment>('/appointments')
  }

  getAppointment = (id: string): Promise<any> => {
    return http.get<Appointment>(`/appointments/${id}`)
  }

  updateAppointment = (id: string, val: Appointment): Promise<any> => {
    return http.patch<Appointment>(`/appointments/${id}`, val)
  }
}

export default new AppointmentService()