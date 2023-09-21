import http from "@/main-http"

export interface User {
  email: String
  password: String
}

class UserService  {
  registerUser = (user: User): Promise<any> => {
    return http.post('/auth/register', user)
  }

  loginUser = (user: User): Promise<any> => {
    return http.post('/auth/login', user)
  }
}

export default new UserService();