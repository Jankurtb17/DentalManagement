<template>
  <el-table
    ref="multipleTableRef"
    :data="props.data"
    style="width: 100%"
    table-layout="fixed"
    v-loading="props.isLoading"
    @row-click="handleRowClick"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55">
  
    </el-table-column>
    <el-table-column property="first_name" label="First Name" />
    <el-table-column property="middle_name" label="Middle Name" />
    <el-table-column property="last_name" label="Last Name" />
    <el-table-column property="phone_number" label="Phone Number" />
    <el-table-column property="email" label="Email" />
    <el-table-column label="Last Appointment">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="Operation" label="Operation">
      <template #default="scope">
        <el-popover placement="bottom" :width="150" trigger="click">
          <div class="list">
            <div class="list-view content" @click="showPatientInfo(scope.row._id)">
              <el-icon><View /></el-icon> View Patients
            </div>
            <div class="list-edit content">
              <el-icon><Edit /></el-icon> Edit Patients
            </div>
            <div class="list-delete content" @click="deletePatient(scope.row._id)">
              <el-icon><Delete /></el-icon> Delete Patients
            </div>
          </div>
          <template #reference>
            <el-icon class="more-icon">
              <More />
            </el-icon>
          </template>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { ElTable } from 'element-plus'
import { useRouter } from 'vue-router'

interface User {
  _id: string
  brgy: string
  city: string
  date_of_birth: string
  email: string
  first_name: string
  last_name: string
  middle_name: string
  phone_number: string
  province: string
  street: string
  zip_code: number
}

const props = defineProps({
  data: {
    type: Array<User>,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref(props.data)

const emit = defineEmits<{
  (e: 'delete', id: string): void
}>()

const handleRowClick = (row: User) => {
  // Update selectedRows array based on row clicks
  if (isSelected(row)) {
    multipleSelection.value = multipleSelection.value.filter((r: any) => r.id !== row._id)
  } else {
    multipleSelection.value.push(row)
  }

  console.log(multipleSelection.value)
}

const isSelected = (row: User) => {
  return multipleSelection.value.some((r: User) => r._id === row._id)
}

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const showPatientInfo = (id: string) => {
  router.push({
    name: 'patient-info',
    params: {
      patient_id: id
    }
  })
}

const deletePatient = (id: string) => {
  emit('delete', id)
}
</script>

<style scoped>
.more-icon {
  cursor: pointer;
}

.list {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
}

.content {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.list-view:hover {
  color: #409eff;
}

.list-delete:hover {
  color: #f56c6c;
}

.list-edit:hover {
  color: #e6a23c;
}

.edit {
  color: #409eff;
}
</style>
