<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import LgSignin from "@/views/devices/LgSignin.vue"
const router = useRouter()
const loginIsVisible = ref(false)
const regIsVisible = ref(false)

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
  <!-- LG/XL Devices Login View -->
  <LgSignin />
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
  .sm-devices {
    display: none;
  }

}

</style>
