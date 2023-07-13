<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sign-reg">
    <router-view name="SignIn" >
    </router-view>
  </div>
  <div>
    <RouterView name="MainContent"/>
  </div>
</template>

<style scoped>
.sign-reg {
  /* height: 100vh; */
}
</style>
