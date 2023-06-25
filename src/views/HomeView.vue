<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
  const register = () => {
    router.push("/register")
  }
  const login = () => {
    router.push("/login")
  }
</script>

<template>
  <div class="main-body">
    <div class="main-img">
      <img src="@/assets/svg/health1.svg" />
    </div>
    <div class="main-text">
      <h1>Manage your health with ease, anytime, anywhere</h1>
    </div>
    <div class="btn">
      <button class="btn-main" @click="register">Register</button>
      <button class="btn-primary" @click="login">SignUp</button>
    </div>
  </div>
</template>

<style scoped>
.mr-5 {
  margin-right: 5px;
}
.ml-5 {
  margin-left: 5px;
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .main-body {
    display: grid;
    grid-auto-rows: 450px 200px 1fr;
    justify-items: center;
    justify-content: space-between;
    grid-auto-flow: row;
  }

  .main-img {
    display: flex;
    justify-content: center;
    align-items: center;
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
    grid-auto-columns: 1fr 1fr;
    gap: 20px;
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
    border: 1px solid #D9D9D9;
    border-radius: 20px;
    color: #D9D9D9;
  }
}
</style>
