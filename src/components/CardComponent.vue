<template>
  <el-card class="cards">
    <template #header>
      <slot name="header">

      </slot>
    </template>
    <slot name="body">

    </slot>
  </el-card>
</template>

<style scoped>
.cards {
  height: 95%;
}
</style>