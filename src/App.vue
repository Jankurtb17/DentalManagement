<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sign-reg">
    <router-view name="SignIn"  v-slot="{ Component, route }">
      <Transition name="page-up" mode="out-in">
      <div :key="route.name || 'defaultKey'">
        <component :is="Component" />
      </div>
    </Transition>
    </router-view>
  </div>
  <div>
    <RouterView name="MainContent"/>
  </div>
</template>

<style scoped>
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
