<template>
  <el-row>
    <div>
      <el-avatar :size="100" :src="url" />
    </div>
    <div class="patient-info">
      <div>
        <h1>Name</h1>
      </div>
      <div>
        <span>Email</span>
      </div>
    </div>
    <div class="btn">
      <el-button type="success">Done</el-button>
      <el-button>Cancelled</el-button>
    </div>
  </el-row>
  <el-divider />
  <el-row>
    <div>
      <el-text class="mx-1" type="info">Case Name</el-text>
    </div>
  </el-row>
  <el-row>
    <h2>CASE NAME</h2>
  </el-row>
</template>

<script lang="ts" setup>
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
defineProps({
  email: String
})
</script>

<style scoped>

.el-row {
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
}

.patient-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
