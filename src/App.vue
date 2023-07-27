<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sign-reg" v-if="$route.meta.login">
    <router-view name="SignIn"  v-slot="{ Component, route }">
      <Transition name="page-up" mode="out-in">
      <div :key="route.name || 'defaultKey'">
        <component :is="Component" />
      </div>
    </Transition>
    </router-view>
  </div>
  <div class="auth-content" v-else>
    <RouterView name="SideMenu"/>
    <RouterView name="MainContent"/>
  </div>
</template>

<style scoped>
.auth-content {
  display: flex;
  height: 100vh;
}
.page-up-enter-active,
.page-up-leave-active {
  transition: 600ms ease all;
}

.page-up-enter-from,
.page-up-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
