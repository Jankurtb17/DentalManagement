<template>
  <div class="lg-login">
    <div class="layer-login">
      <div class="form">
        <h1 class="header-title">Create an account</h1>
        <div class="google-signin" @click="googleLogin">
          <img src="@/assets/icons/GoogleIcon.svg" />
          <span>Continue with Google</span>
        </div>
        <el-divider content-position="center">
          <span> or login using </span>
        </el-divider>
        <el-form 
        :model="form"
        :rules="rules">
          <el-form-item prop="email">
            <label for="">Email</label>
            <el-input
              type="text"
              v-model="form.email"
              placeholder="Enter your email"
              size="large"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <label>Password</label>
            <el-input
              type="password"
              v-model="form.password"
              placeholder="Password"
              size="large"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-submit" color="#445ec1" size="large" primary @click="signUp"
              >Sign In</el-button
            >
          </el-form-item>
        </el-form>
        <div class="login-link">
          <span>Don't have an account yet?</span>
          <router-link to="/">Login here</router-link>
        </div>
      </div>

      <div class="img" v-if="!moveImg">
        <div class="main-img">
          <img src="@/assets/svg/health1.svg" />
          <span>We give importance to your health</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import userLogin from '@/stores/login'
import type { FormItem } from '@/utils/Types'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { formRules } from '@/utils/FormRules'
import useUser from "@/composables/Users"
const router = useRouter()
const { googleLogin } = userLogin()
const { register } = useUser()
const form = reactive({
  email: '',
  password: ''
} as FormItem)

const strongPassword = (rule: any, value: string, callback: any) => {
  const hasUppercase = /[A-Z]/.test(value)
  // Check if the password contains at least one special character (non-alphanumeric)
  const hasSpecialChar = /[^A-Za-z0-9]/.test(value)
  // Check if the password is at least 8 characters long
  const isLongEnough = value.length >= 8;
  // Return true if all conditions are met
  if (!value) {
    callback(new Error('Please enter a password'))
  } else {
    if (!hasUppercase) {
      callback(new Error('Password must have an uppercase'))
    } else if (hasUppercase && !hasSpecialChar) {
      callback(new Error('Password must have an special character'))
    } else if (hasUppercase && hasSpecialChar && !isLongEnough) {
      callback(new Error('Password should be atleast 8 characters'))
    } else {
      callback()
    }
  }
  callback()
}

const validEmail = (rule: any, value: string, callback: any) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
  if(!value) {
    callback(new Error("Please enter an email address"))
  } else {
    if(!emailPattern) {
      callback(new Error("Please enter a valid email address"))
    } else {
      callback()
    }
  }
}

const rules = reactive<FormRules>({
  email: [
    {
      validator: validEmail,
      trigger: "blur"
    }
  ],
  password: [
    {
      validator: strongPassword,
      trigger: 'blur'
    }
  ]
})

const signUp = async () => {
  try {
    await register(form).then(() => {
      router.push('/dashboard')
    })
  } catch (error) {
    ElNotification({
      title: 'Invalid',
      type: 'error',
      message: `${error}`
    })
  }
}

const moveImg = ref(false)

const showRegister = () => {
  router.push('/sign-up')
}
</script>

<style scoped>
/* Slide Right Register */
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-leave-active {
  transition: all 1s ease-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  z-index: 10;
  transform: translateX(50%);
  opacity: 0;
}

.scale-up-enter-active {
  transform: scale(125%);
  transition: transform 0.5s ease-out;
}
.scale-up-leave-active {
  transform: scale(125%);
  transition: all 0.5s ease-out;
  z-index: -1;
}

.scale-up-enter-from {
  transform: scale(100%);
  opacity: 0;
}
.scale-up-leave-to {
  z-index: 10;
  transform: translateX(50%);
  opacity: 0;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .lg-login {
    display: none;
  }
}
@media only screen and (min-width: 821px) {
  .buttons-sm-md {
    display: none;
  }

  div.form {
    border: 1px solid gray;
  }

  .sm-devices {
    display: none;
  }

  .lg-login {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-title {
    font-size: 50px;
    font-weight: 500;
    color: #445ec1;
    text-align: center;
    margin-bottom: 20px;
  }

  .layer-login {
    display: grid;
    height: 50vh;
    grid-template-columns: repeat(2, 1fr);
    /* border: 1px solid gray; */
  }
  .form {
    padding: 50px;
  }
  .img {
    padding: 100px;
    background-color: #445ec1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .main-img {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .main-img span {
    margin-top: 20px;
    font-size: 20px;
    color: #fff;
  }

  .google-signin {
    width: 100%;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 5px;
    cursor: pointer;
  }

  .btn-submit {
    width: 100%;
    margin-top: 20px;
  }

  .login-link {
    text-align: center;
  }
}
</style>
