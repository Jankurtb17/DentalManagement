<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
const router = useRouter()
const loginIsVisible = ref(false)
const regIsVisible = ref(false)

interface FormItem {
  email: string
  password: string
}

const form = reactive({
  email: '',
  password: ''
} as FormItem)

const login = () => {
  userLogReg.value = false
  loginIsVisible.value = true
  regIsVisible.value = false
}

const register = () => {
  userLogReg.value = false
  loginIsVisible.value = false
  regIsVisible.value = true
}

const userLogReg = ref(true)
</script>

<template>
  <!-- SM and MD Devices -->
  <div class="main-body sm-devices">
    <div class="main-img">
      <img src="@/assets/svg/health1.svg" />
    </div>

    <Transition name="page-slide">
      <div v-if="userLogReg" class="buttons-sm-md">
        <div class="main-text">
          <h1>Manage your health with ease, anytime, anywhere</h1>
        </div>
        <div class="btn">
          <button class="btn-main" @click="register">Register</button> <br />
          <button class="btn-primary" @click="login">Login</button>
        </div>
      </div>
    </Transition>
    <Transition name="page-up">
      <div v-if="!userLogReg && loginIsVisible" class="sign-in">
        <SignIn />
      </div>
    </Transition>

    <Transition name="page-up">
      <div v-if="!userLogReg && regIsVisible" class="sign-up">
        <SignUp />
      </div>
    </Transition>
  </div>

  <!-- XL and LG Devices -->
  <div class="lg-login">
    <div class="layer-login">
      <div class="form">
        <h1 class="header-title">Welcome!</h1>
        <div class="google-signin">
          <img src="@/assets/icons/GoogleIcon.svg" />
          <span>Continue with Google</span>
        </div>
        <el-divider content-position="center">
          <span> or login using </span>
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
            <el-button class="btn-submit" color="#445ec1" size="large" primary>Sign In</el-button>
          </el-form-item>
        </el-form>
        <div class="login-link">
          <span>Don't have an account yet?</span> <a href="#" @click="showSignIn">Register here</a>
        </div>
      </div>
  
      <div class="img">
        <div class="main-img">
          <img src="@/assets/svg/health1.svg" />
          <span>We give importance to your health</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ml-5 {
  margin-left: 5px;
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .main-body {
    flex: grid;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: #445ec1;
    align-content: center;
  }

  .main-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .main-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }

  .btn {
    display: flex;
    flex-direction: column;
    padding: 50px;
  }

  .btn-main {
    padding: 10px 55px;
    border: none;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .btn-primary {
    padding: 10px 55px;
    border: none;
    background-color: inherit;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    color: #d9d9d9;
  }
  .logVisible {
    min-height: 10vh;
  }

  .page-slide-enter-active,
  .page-slide-leave-active {
    transition: transform 350ms ease-in-out;
  }

  .page-slide-enter-from,
  .page-slide-leave-to {
    transform: translateY(-50px);
  }

  .page-up-enter-active,
  .page-up-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .page-up-enter-from,
  .page-up-leave-to {
    transform: translateY(100px);
  }
  .loginShow {
    z-index: 99;
  }
}

@media only screen and (min-width: 481px) and (max-width: 820px) {
  .main-body {
    display: grid;
    height: 100vh;
    background-color: #445ec1;
  }

  .main-img {
    display: flex;
    justify-content: center;
    margin: 60px 0;
  }

  .main-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }

  .btn {
    display: grid;
    padding: 120px;
  }

  .btn-main {
    padding: 10px 55px;
    border: none;
    border-radius: 20px;
  }

  .btn-primary {
    padding: 10px 55px;
    border: none;
    background-color: inherit;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    color: #d9d9d9;
  }

  .logVisible {
    min-height: 10vh;
  }

  .page-slide-enter-active,
  .page-slide-leave-active {
    transition: all 350ms ease-in-out;
  }

  .page-slide-enter-from,
  .page-slide-leave-to {
    transform: translateY(-20%);
  }

  .page-up-enter-active,
  .page-up-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .page-up-enter-from,
  .page-up-leave-to {
    transform: translateY(100%);
  }
  .loginShow {
    z-index: 99;
  }
}

@media only screen and (min-width: 821px) {
  .buttons-sm-md {
    display: none;
  }

  .layer-login {

  }

  .sm-devices {
    display: none;
  }

  .lg-login {
    height: 100vh;
    padding: 0 250px;
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
    border: 1px solid gray;
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
