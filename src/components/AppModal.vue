<template>
  <el-dialog
    v-bind="$attrs"
    :title="props.title"
    width="30%"
    :destroy-on-close="true"
    >
    <slot name="body">
      
    </slot>
    
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps(["title"])

</script>


