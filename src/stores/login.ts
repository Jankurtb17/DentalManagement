import { defineStore } from 'pinia'
import {
  setPersistence,
  getAuth,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  inMemoryPersistence,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset
} from 'firebase/auth'

const auth = getAuth()

export const userLogin = defineStore('user', {
  state: () => ({}),
  actions: {
    loginUser(email: string, password: string) {
      const persistence = setPersistence(auth, browserSessionPersistence).then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .then((response: any) => {
            sessionStorage.setItem('creds', JSON.stringify(response.user))
          })
          .catch((error) => {
            let err = ''
            switch (error.code) {
              case 'auth/invalid-email':
                err = 'Please enter a valid email address'
                break
              case 'auth/user-not-found':
                err = 'No account with that email was found'
                break
              case 'auth/wrong-password':
                err = 'Password is incorrect'
                break
              default:
                err = 'Email or password is incorrect'
                break
            }
            throw err
          })
      })
      return persistence
    },
    register(email: string, password: string) {
      const register = setPersistence(auth, browserSessionPersistence).then(() => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then(async (response: any) => {
            sessionStorage.setItem('creds', JSON.stringify(response.user))
          })
          .catch((error) => {
            let err = ''
            switch (error.code) {
              case 'auth/email-already-in-use':
                err = 'Email already exists'
                break
              case 'auth/invalid-email':
                err = 'Please enter a valid email address'
                break
              default:
                break
            }
            throw err
          })
      })
      return register
    },
    async logout() {
      await signOut(auth)
    },
    googleLogin() {
      const provider = new GoogleAuthProvider()
      const google = signInWithPopup(auth, provider).then(async (response: any) => {
        sessionStorage.setItem('creds', JSON.stringify(response.user))
      })
      return google
    },
    resetPassword(email: string) {
      const reset = sendPasswordResetEmail(auth, email).catch((error) => {
        let err = ''
        switch (error.code) {
          case '400':
            err = 'Verification code invalid'
            break
          default:
            err = 'Email or password is incorrect'
            break
        }
        throw err
      })
      return reset
    },
    verifyPassword(newPassword: string) {
      const verify = verifyPasswordResetCode(auth, newPassword)
        .then((response) => {
          localStorage.setItem('creds', JSON.stringify(auth))
        })
        .catch((error) => {
          console.log(error)
          throw error
        })
      return verify
    },
    changePassword(oobCode: string, password: string) {
      const changePass = confirmPasswordReset(auth, oobCode, password).catch((error) => {
        console.log(error)
        throw error
      })
      return changePass
    }
  },
  getters: {
    generateVerificationCode() {
      const min = 100000
      const max = 999999
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
})

export default userLogin
