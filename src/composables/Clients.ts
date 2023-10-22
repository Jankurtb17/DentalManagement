import ClientService from "@/services/client"
import type { ClientInformation } from "@/services/client"
import { reactive } from "vue"
import type { FormRules } from "element-plus"

export interface Status {
  isLoading: boolean
  code: number
  message: string
}


export const useClient = () => {
  const rules = reactive<FormRules<ClientInformation>>({
    first_name: [
      {
        required: true,
        message: 'Please enter a first name',
        trigger: 'blur'
      },
      {
        pattern: /[a-zA-Z\s]+$/gm,
        message: 'Please enter a letter only'
      }
    ],
    last_name: [
      {
        required: true,
        message: 'Please enter a last name',
        trigger: 'blur'
      },
      {
        pattern: /[a-zA-Z\s]+$/gm,
        message: 'Please enter a letter only'
      }
    ],
    middle_name: [
      {
        pattern: /[a-zA-Z\s]+$/gm,
        message: 'Please enter a letter only'
      }
    ],
    sex: [
      {
        required: true,
        message: 'Please select a sex by birth',
        trigger: 'change'
      },
      {
        pattern: /[a-zA-Z\s]+$/gm,
        message: 'Please enter a letter only'
      }
    ],
    email: [
      {
        required: true,
        message: 'Please enter an email address',
        trigger: 'blur'
      },
      {
        min: 5,
        max: 20,
        pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm,
        message: 'Please enter a valid email address'
      }
    ],
    date_of_birth: [
      {
        required: true,
        message: 'Please enter a date of birth',
        trigger: 'change'
      }
    ],
    phone_number: [
      {
        required: true,
        message: 'Please enter a phone number',
        trigger: 'blur'
      },
      {
        min: 11,
        max: 11,
        message: 'Phone number must be 11 digits'
      },
      {
        pattern: /(09|\+639)\d{9}$/gm,
        message: 'Please enter a valid phone number'
      }
    ],
    lot_number: [
      {
        required: true,
        message: 'Please enter a lot number',
        trigger: 'blur'
      },
    ],
    street: [
      {
        required: true,
        message: 'Please enter a street name',
        trigger: 'blur'
      },
    ],
    brgy: [
      {
        required: true,
        message: 'Please select a barangay name',
        trigger: 'blur'
      },
  
    ],
    city: [
      {
        required: true,
        message: 'Please select a city name',
        trigger: 'blur'
      },
  
    ],
    province: [
      {
        required: true,
        message: 'Please select a street name',
        trigger: 'blur'
      },
    
    ],
    region: [
      {
        required: true,
        message: 'Please select a region name',
        trigger: 'blur'
      },
    ],
    country: [
      {
        required: true,
        message: 'Please enter a country name',
        trigger: 'blur'
      },
      {
        pattern: /[a-zA-Z\s]+$/gm,
        message: 'Please enter a letter only'
      }
    ],
  })

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

  const deletePatient = async(id: string) => {
    status.isLoading = true
    const client = await clientApi
      .deleteClient(id)
      .then((response) => response.data)
      .catch((e) =>{
        throw e
      })
      .finally(() => status.isLoading = false)
    return client
  }

  return {
    rules,
    status,
    getAllClients,
    getClient,
    createClient,
    deletePatient
  }
  
}

export default useClient;