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
          <div class="info">
            <el-card>
              <div class="patient-img">
                <el-avatar :size="150" :src="url" />
              </div>
              <div class="patient-name">
                <h1>Jan Kurt D. Bayaras</h1>
                <span>j.kurtbayaras@gmail.com</span>
              </div>
            </el-card>
            <el-card>
              <div class="patient-info">
                <div class="patient-data">
                  <div class="data">
                    <span class="header">Gender</span>
                    <span>Male</span>
                  </div>
                  <div class="data">
                    <span class="header">Date of Birth</span>
                    <span>Dec 30, 1997</span>
                  </div>
                  <div class="data">
                    <span class="header">Phone Number </span>
                    <span>09565011210</span>
                  </div>
                </div>

                <div class="patient-data">
                  <div class="data">
                    <span class="header">Street Address</span>
                    <span>9391 Felipe</span>
                  </div>
                  <div class="data">
                    <span class="header">Barangay</span>
                    <span>Guadalupe Nuevo</span>
                  </div>
                  <div class="data">
                    <span class="header">City </span>
                    <span>Makati</span>
                  </div>
                </div>

                <div class="patient-data">
                  <div class="data">
                    <span class="header">Country</span>
                    <span>Philippines</span>
                  </div>
                  <div class="data">
                    <span class="header">Zip code</span>
                    <span>1212</span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <el-card>
            <el-tabs tab-position="top" class="demo-tabs">
              <el-tab-pane label="Appointment">Appointment</el-tab-pane>
              <el-tab-pane label="Medical Records">Medical Records</el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
        <div class="card-two">
          <el-card>
            <div>
              <span class="header">Notes</span>
              <el-form>
                <el-form-item>
                  <el-input v-model="notes" type="textarea" class="no-resize" :rows="12" disabled />
                </el-form-item>
                <el-form-item class="btn">
                  <el-button type="primary">Update Notes</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>

          <el-card>
            
          </el-card>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from '@/base/BaseLayout.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { Printer, Filter } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue'
const state = reactive({
  circleUrl: '../assets/img/administrator.jpg'
})

const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const notes = ref('')
const { circleUrl } = toRefs(state)
</script>

<style scoped>
.main-display {
  display: grid;
  grid-template-columns: 2.7fr 1.3fr;
  gap: 20px;
}

.card-one {
  height: 85vh;
  display: grid;
  grid-template-rows: 1.8fr 2fr;
  gap: 10px;
}

.patient-info {
  padding-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  /* height: 100%; */
  gap: 50px;
}

.info {
  /* background-color: black; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
}

.patient-img {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.patient-name {
  text-align: center;
}

.patient-img .el-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.patient-data {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: 'Roboto', sans-serif;
}

.data {
  display: flex;
  flex-direction: column;
}

.data .header {
  font-weight: 600;
  color: rgb(36, 35, 35);
}

.appointments {
  /* background-color: pink; */
}

.card-two {
  display: grid;
  grid-template-rows: 1.2fr 1fr;
  gap: 10px;
}

.no-resize {
  resize: vertical;
  background-color: red;
}

.notes {
  background-color: white;
}

.files {
  background-color: yellow;
}
</style>

<style>
textarea {
  resize: none !important;
}
</style>
