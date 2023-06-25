<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sign-reg">
    <RouterView name="SignIn" />
  </div>
  <div>
    <RouterView name="MainContent"/>
  </div>
</template>

<style scoped>
.sign-reg {
  min-height: 100vh;
  background-color: #445EC1;
}
</style>
