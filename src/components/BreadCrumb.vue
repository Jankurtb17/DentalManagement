<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <slot name="content"></slot>
    </el-breadcrumb>
    <div>
      <slot name="extra"></slot>
      
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>