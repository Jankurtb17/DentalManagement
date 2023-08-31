<template>
  <el-card class="cards" :class="{'full-height': !props.hasHeaderTitle}">
    <template #header v-if="props.hasHeaderTitle">
      <slot name="header">

      </slot>
    </template>
    <slot name="body">

    </slot>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  hasHeaderTitle: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
.cards {
  height: 95%;
}

.full-height {
  height: 100%;
}
</style>