<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu class="el-menu-vertical-demo" :router="true" :default-active="$route.fullPath">
        <div class="logo">
          <h1>JnkB</h1>
        </div>
        <div class="menus">
          <el-menu-item index="/dashboard">
            <span>Overview</span>
          </el-menu-item>
          <el-menu-item index="/calendar">
            <span>Calendar</span>
          </el-menu-item>
          <el-menu-item index="/patient-list">
            <span>Patient List</span>
          </el-menu-item>
          <el-menu-item index="/payment">
            <span>Payment</span>
          </el-menu-item>
          <el-menu-item index="/settings">
            <span>Settings</span>
          </el-menu-item>
        </div>
        <div class="profile-sidemenu">
          <div>
            <img src="" />
            <div>
              <span>Name</span>
              <span>Position</span>
            </div>
          </div>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
  width: 270px;
  display: flex;
  flex-direction: column;
}

.logo {
  flex: 1;
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
}
</style>
