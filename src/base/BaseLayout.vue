<template>
  <div class="content">
    <el-header>
      <slot name="header"> </slot>
    </el-header>
    <!-- <el-scrollbar height="95vh"> -->
      <div class="main-content">
        <slot name="body"> </slot>
      </div>
    <!-- </el-scrollbar> -->
  </div>
</template>

<style scoped>
.el-header {
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
}
.main-content {
  padding: 10px 20px;
}
</style>
