<template>
  <Transition  name="page-up">
    <div class="login" v-if="!login">
      <div class="google-signin">
        <img src="@/assets/icons/GoogleIcon.svg" />
        <span>Continue with Google</span>
      </div>
      <el-divider content-position="center">
        <span> or register</span>
      </el-divider>
      <el-form>
        <el-form-item prop="Name">
          <label for="">Email</label>
          <el-input
            type="text"
            v-model="form.email"
            placeholder="Enter your email"
            size="large"
          ></el-input>
        </el-form-item>
        <el-form-item prop="Name">
          <label>Password</label>
          <el-input
            type="password"
            v-model="form.password"
            placeholder="Password"
            size="large"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button color="#445ec1" size="large" primary>Register</el-button>
        </el-form-item>
      </el-form>
      <div class="login-link"><span>Already have an account?</span> <a href="#" @click="loginShow">Login here</a></div>
    </div>
  </Transition>
  <Transition name="page-slide">
    <div v-if="login">
      <SignIn />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import SignIn from '@/views/SignIn.vue'
import { ref, reactive } from 'vue'
const login = ref(false)
const loginShow = () => {
  login.value = true
}
interface Form {
  email: string
  password: string
}
const form = reactive<Form>({
  email: '',
  password: ''
})
</script>

<style scoped>
  .page-slide-enter-active{
    transition: opacity 1000ms ease-in
  }
  .page-slide-leave-active {
    transition: opacity 1000ms ease-out;
  }

  .page-slide-enter-from
  .page-slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  .page-up-enter-active,
  .page-up-leave-active {
    transition: opacity 1000ms ease-out;
  }

  .page-up-enter-from,
  .page-up-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .login {
    padding: 50px;
    height: 60vh;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .google-signin {
    border: 1px solid lightgray;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    gap: 10px;
    border-radius: 3px;
    margin-bottom: 35px;
  }

  .el-button {
    width: 100%;
    margin-top: 20px;
  }

  .login-link {
    margin-top: 30px;
    text-align: center;
  }
}

@media only screen and (min-width: 481px) and (max-width: 820px) {
  .login {
    padding: 50px;
    height: 60vh;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .google-signin {
    border: 1px solid lightgray;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    gap: 10px;
    border-radius: 3px;
    margin-bottom: 35px;
  }

  .el-button {
    width: 100%;
    margin-top: 20px;
  }

  .login-link {
    margin-top: 50px;
    text-align: center;
  }
}
</style>
