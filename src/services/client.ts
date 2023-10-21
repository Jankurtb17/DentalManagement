import http from '@/main-http'

export interface ClientInformation {
  first_name: string
  last_name: string
  middle_name?: string
  email: string
  sex: string
  date_of_birth: string
  phone_number: string
  lot_number: string
  street: string
  region: string
  province: string | null
  city: string
  brgy: string
  zip_code: string
  country: string;
}

class ClientService {
  getAllClient = (): Promise<any> => {
    const token = JSON.parse(localStorage.getItem('token') as string);
    return http.get('/clients', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  } 

  getClient = (clientId: string): Promise<any> => {
    return http.get<ClientInformation>(`/clients/${clientId}`)
  }

  createClient = (client: ClientInformation): Promise<any> => {
    console.log(client)
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