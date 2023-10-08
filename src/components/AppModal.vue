<template>
  <el-dialog
    v-bind="$attrs"
    :title="props.title"
    width="50%"
    :destroy-on-close="true"
    >
    <slot name="body">
      
    </slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps(["title"])

</script>


