<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Histogram /></el-icon>
      Dashboard Overview
    </template>
    <template #body>
      <div class="dashboard">
        <!-- Left cards -->
        <div class="left-card">
          <ChartComponent />
          <div class="left-card-patients">
            <el-row :gutter="20">
              <el-col>
                <CardComponent>
                  <template #header> Patients </template>
                </CardComponent>
              </el-col>
            </el-row>
            <el-row>
              <el-col >
                <CardComponent>
                  <template #header> Age Group </template>
                </CardComponent>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- Right cards -->
        <div class="right-card">
          <!-- Upcoming Request Card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header>
                  Upcoming Appointment
                </template>
                <template #body>
                  <h5 class="count">51</h5>
                  <div class="card-body">
                    <div class="card-more">
                      <span>More</span>
                      <el-button type="primary" :icon="ArrowRight" circle />
                    </div>
                    <div class="card-img">
                      <img src="../assets/dot.svg" alt="">
                    </div>
                  </div>
                </template>
              </CardComponent>
            </el-col>
          </el-row>
          <!-- Approval request card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header>
                  Approval Appointment
                </template>
                <template #body>
                  <h5 class="count">51</h5>
                  <div class="card-body">

                    <div class="card-more">
                      <span>More</span>
                      <el-button type="primary" :icon="ArrowRight"  circle />
                    </div>
                    <div class="card-img">
                        <img src="../assets/dot.svg" alt="">
                      </div>
                  </div>
                </template>
              </CardComponent>
            </el-col>
          </el-row>
          <!-- Today's Appointment card -->
          <el-row>
            <el-col>
              <CardComponent>
                <template #header>
                  Today's Appointment
                </template>
              </CardComponent>
            </el-col>
          </el-row>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import ChartComponent from '@/components/ChartComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import BaseLayout from '@/base/BaseLayout.vue'
import { ArrowRight } from  '@element-plus/icons-vue'
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  height: 90vh;
}

.left-card {
  height: 98vh;
  display: grid;
  grid-template-rows: 580px;
 }


.left-card-patients {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 93%;
  padding-bottom: 30px;
}

.right-card {
  display: grid;
  grid-template-rows: 250px 250px 2fr;
  padding-bottom: 50px;
  gap: 20px;
}

.count {
  color: #A7A7A7;
  font-size: 2.5em;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-img {
  position: relative;
  top: 20;
  left: 10px;
  height: 80%;
}

.card-more {
  background-color: #DEE5F1;
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 20px;
  justify-content: space-between;
}


</style>
