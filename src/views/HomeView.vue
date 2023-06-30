<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
const router = useRouter()
const login = () => {
  router.push('/login')
  userLogReg.value = false
}

const register = () => {
  userLogReg.value = false
}

const userLogReg = ref(true)
</script>

<template>
  <div class="main-body" :class="{userLogReg: 'loginShow'}" >
    <div class="main-img">
      <img src="@/assets/svg/health1.svg" />
    </div>

    <Transition name="page-slide">
      <div v-if="userLogReg">
        <div class="main-text">
          <h1>Manage your health with ease, anytime, anywhere</h1>
        </div>
        <div class="btn">
          <button class="btn-main" @click="register">Register</button> <br />
          <button class="btn-primary" @click="login">SignUp</button>
        </div>
      </div>
    </Transition>
    <Transition name="swipe-up">
      <div v-if="!userLogReg" class="sign-in">
        <SignIn />
      </div>
    </Transition>
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
</style>
