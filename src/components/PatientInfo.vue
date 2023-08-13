<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Calendar /></el-icon>
      <span>Patient Information</span>
    </template>
    <template #header-two>
      <BreadCrumb>
        <template #content>
          <el-breadcrumb-item :to="{ path: '/dashboard' }">Overview</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/patient-list' }">Patient List</el-breadcrumb-item>
          <el-breadcrumb-item>{{ $route.params.patient_id }}</el-breadcrumb-item>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button :icon="Printer">Print</el-button>
          </div>
        </template>
      </BreadCrumb>
    </template>
    <template #body>
      <div class="main-display">
        <div class="card-one">
          <div class="info"></div>
          <div class="appointments"></div>
        </div>
        <div class="card-two">
          <div class="notes"></div>

          <div class="files"></div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from '@/base/BaseLayout.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { Printer, Filter } from '@element-plus/icons-vue'
</script>

<style scoped>
.main-display {
  display: grid;
  grid-template-columns: 2.7fr 1.2fr;
  gap: 10px;
}

.card-one {
  height: 85vh;
  display: grid;
  grid-template-rows: repeat(1, fr);
  gap: 10px;
}

.info {
  background-color: black;
}

.appointments {
  background-color: pink;
}

.card-two {
  background-color: red;
  display: grid;
  grid-template-rows: 1.2fr 1fr;
  gap: 10px;
}

.notes {
  background-color: white;
}

.files {
  background-color: yellow;
}


</style>
