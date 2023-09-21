import UserService from "@/services/user"
import type { User } from "@/services/user"
import { reactive } from "vue"

interface Status {
  isLoading: Boolean
  code: Number
  message: String
}

export const useUser = () => {
  // create new instance of user service
  const userService = UserService
  const status = reactive({} as Status)
  // register user
  const register = async (user: User) => {
    status.isLoading = true
    const registerUser = await userService
      .registerUser(user)
      .then((response) => {
        console.log(response.data)
        sessionStorage.setItem('creds', JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error.message)
        status.message = error.message
        throw error;
      })
      .finally(() => status.isLoading = false)
    return registerUser
  }
  // login user
  const login = async (user: User) => {
    status.isLoading = true
    const registerUser = await userService
      .loginUser(user)
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', JSON.stringify(response.data.authentication.sessionToken))
        sessionStorage.setItem('creds', JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error.message)
        status.message = error.message
        throw error;
      })
      .finally(() => status.isLoading = false)
    return registerUser
  }

  return {
    register,
    login
  }
}

export default useUser