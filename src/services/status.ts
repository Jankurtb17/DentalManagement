import { reactive } from "vue"

interface Status {
  isLoading: boolean
  code: number
  message: string
}

export const status = reactive({} as Status)

export default status;