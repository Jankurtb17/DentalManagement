<template>
  <BaseLayout>
    <template #header>

    </template>
    <template #body>
      <CalendarComponent />
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/base/BaseLayout.vue";
import CalendarComponent from "@/components/CalendarComponent.vue"
</script>