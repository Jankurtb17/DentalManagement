import http from '@/main-http'
const token = JSON.parse(localStorage.getItem('token') as string);

export interface ClientInformation {
  first_name: String
  last_name: String
  middle_name?: String
  email: String
  date_of_birth: String
  phone_number: String
  street: string
  brgy: string
  city: string
  province: string
  zip_code: string
}

class ClientService {
  getAllClient = (): Promise<any> => {
    return http.get<ClientInformation>('/clients', {
      headers: {
        Authorization: `Bearer ${token}`,
        withCredentials: true
      }
    })
  } 

  getClient = (clientId: string): Promise<any> => {
    return http.get<ClientInformation>(`/clients/${clientId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        withCredentials: true
      }
    })
  }

  createClient = (client: ClientInformation): Promise<any> => {
    return http.post<ClientInformation>('/clients', client)
  }

  updateClient = (clientId: string, client: ClientInformation): Promise<any> => {
    return http.patch<ClientInformation>(`/clients/${clientId}`, client)
  }

  deleteClientg = (clientId: string): Promise<any> => {
    return http.delete(`/clients/${clientId}`)
  }
}

export default new ClientService();