<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu class="el-menu-vertical-demo" :router="true" :default-active="$route.fullPath">
        <div class="logo">
          <img src="../assets/icons/MainLogo-2.svg" class="logo-img" />
        </div>
        <div class="menus">
          <el-menu-item class="menu-items" index="/dashboard">
            <el-icon><Histogram /></el-icon>
            <span>Overview</span>
          </el-menu-item>
          <el-menu-item index="/calendar">
            <el-icon><Calendar /></el-icon>
            <span>Calendar</span>
          </el-menu-item>
          <el-menu-item index="/patient-list">
            <el-icon><User /></el-icon>
            <span>Patient List</span>
          </el-menu-item>
          <el-menu-item index="/payment">
            <el-icon><CreditCard /></el-icon>
            <span>Payment</span>
          </el-menu-item>
          <el-menu-item index="/settings">
            <el-icon><Setting /></el-icon>
            <span>Settings</span>
          </el-menu-item>
        </div>
        <div class="profile-sidemenu">
          <el-avatar :src="circleUrl" />
          <div class="lower-name">
            <span class="name">Jan Kurt D. Bayaras</span>
            <span class="position">Administrator</span>
          </div>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl: '../assets/img/administrator.jpg'
})

const { circleUrl } = toRefs(state)
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
  width: 270px;
  display: flex;
  flex-direction: column;
}

.logo {
  flex: 1;
  display: flex;
  padding: 5px;
}

.logo-img {
  height: 70px;
}
.logo-text {
  padding-left: 10px;
}

.menus {
  flex: 10;
}


.is-active {
  background-color: #445ec1;
  color: #fff;
}

.el-menu-item :deep(span) {
  font-weight: 500;
}

.profile-sidemenu {
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  gap: 15px;
  align-items: center;
}

.lower-name {
  display: flex;
  flex-direction: column;
}

.lower-name .name {
  font-size: 17px;
}

.lower-name .position {
  color: rgb(100, 98, 98);
}

.el-menu-items {
  display: flex;
  align-items: center;
}


</style>
