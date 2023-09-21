<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Calendar /></el-icon>
      <span>Patient List</span>
    </template>
    <template #header-two>
      <BreadCrumb>
        <template #content>
          <el-breadcrumb-item :to="{ path: '/dashboard' }">Overview</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/patient-list' }">Patient List</el-breadcrumb-item>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button :icon="Printer">Print</el-button>
            <el-dropdown>
              <el-button type="primary" :icon="Filter">
                Filter <el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Gender</el-dropdown-item>
                  <el-dropdown-item>City</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
      </BreadCrumb>
    </template>
    <template #body>
      <AppTable />
      <AppModal v-model="deleteUser">
        <template #body>
          Delete User
        </template>
      </AppModal>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
  import AppModal from '@/components/AppModal.vue'
  import BaseLayout from '@/base/BaseLayout.vue'
  import AppTable from '@/components/AppTable.vue'
  import { Printer, Filter } from '@element-plus/icons-vue'
  import BreadCrumb from "@/components/BreadCrumb.vue"
  import UserServices from "@/composables/Users"
  import useClient from '@/composables/Clients'
  import { ref, reactive, onMounted } from "vue"
  const { getAllClients } = useClient()
  const users = ref([])
  const deleteUser = ref(false)

  const getData = async () => {
    try {
      const data = await getAllClients()
      users.value = data
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    getData()
  })





</script>

<style scoped>
.el-page-header {
  padding: 10px 0;
}

.items-center {
  display: flex;
  gap: 10px;
}

.table {
  margin-top: 20px;
}
</style>
