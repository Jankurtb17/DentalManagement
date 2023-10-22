<template>
  <el-dialog
    v-bind="$attrs"
    :title="props.title"
    :width="props.size"
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
const props = defineProps(["title", "size"])

</script>


