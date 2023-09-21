import ClientService from "@/services/client"
import type { ClientInformation } from "@/services/client"
import { reactive } from "vue"

interface Status {
  isLoading: Boolean
  code: Number
  message: String
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

  return {
    getAllClients
  }
  
}

export default useClient;