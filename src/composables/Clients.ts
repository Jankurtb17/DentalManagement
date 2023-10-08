import ClientService from "@/services/client"
import type { ClientInformation } from "@/services/client"
import { reactive } from "vue"

export interface Status {
  isLoading: boolean
  code: number
  message: string
}

export const useClient = () => {
  const clientApi = ClientService
  const status = reactive({} as Status)
  const getAllClients = async () => {
    status.isLoading = true
    const client = await clientApi
      .getAllClient()
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        status.message = error
        console.log(error)
        throw error
      })
      .finally(() => {
        status.isLoading = false
      })
    return client
  }

  const getClient = async (id: string) => {
    status.isLoading = true
    const client = await clientApi
      .getClient(id)
      .then((response) => response.data)
      .catch((error) => {
        status.message = error
        throw error
      })
      .finally(() => status.isLoading = false)
    return client
  }
  
  const createClient = async (values: ClientInformation) => {
    status.isLoading = true
    const client = await clientApi
      .createClient(values)
      .then((response) => response.data) 
      .catch((e) => {
        throw e
      })
      .finally(() => status.isLoading = false)
    return client
  }

  return {
    status,
    getAllClients,
    getClient,
    createClient
  }
  
}

export default useClient;