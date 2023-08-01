<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      :title="props.title"
      width="30%"
      ></el-dialog>
      <span>This is a message</span>
      <slot name="body">
        
      </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const props = defineProps(["title"])
const dialogVisible = ref(false)


</script>


