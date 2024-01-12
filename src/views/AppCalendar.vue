<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Calendar /></el-icon>
      <span>Calendar</span> 
    </template>
    <template #body>
      <CalendarComponent />
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/base/BaseLayout.vue";
import CalendarComponent from "@/components/CalendarComponent/CalendarComponent.vue"
</script>

<style scoped>
span {
  font-weight: 600;
  font-size: 1.5em;
  padding-left: 10px;
}

</style>