<template>
  <div class="content">
    <el-header>
      <slot name="header"> </slot>
    </el-header>
    <el-header class="header-two" v-if="$route.meta.hasTwoHeader">
      <slot name="header-two"> </slot>
      <slot name="extra"></slot>
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

.header-two {
  display: flex;
  justify-content: space-between;
}
</style>
