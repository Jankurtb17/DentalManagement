<template>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    table-layout="fixed"
    @row-click="handleRowClick"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"  width="55" >
      <!-- <template #default="scope">
        {{ scope.row }}
      </template> -->
    </el-table-column>
    <el-table-column property="name" label="Name" />
    <el-table-column property="phoneNumber" label="Phone Number" />
    <el-table-column label="Last Appointment">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="address" label="Address" show-overflow-tooltip />
    <el-table-column property="Operation" label="Operation">
      <template #default="scope">
        <el-popover placement="bottom" :width="150" trigger="click">
          <div class="list">
            <div class="list-view content" @click="showPatientInfo(scope.row.id)">
              <el-icon ><View /></el-icon> View Patients
            </div>
            <div class="list-edit content">
              <el-icon><Edit /></el-icon> Edit Patients
            </div>
            <div class="list-delete content">
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
import { useRouter } from "vue-router"

interface User {
  id: number,
  date: string
  name: string
  phoneNumber: string
  address: string
}
const router = useRouter()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const tableData: User[] = [
  {
    id: 1,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-03',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 2,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-02',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 3,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-04',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 4,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-01',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 5,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-08',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 6,
    name: 'Tom',
    date: '2016-05-06',
    phoneNumber: '09982797228',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 7,
    name: 'Tom',
    phoneNumber: '09982797228',
    date: '2016-05-07',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const handleRowClick = (row: User) => {
  // Update selectedRows array based on row clicks
  if (isSelected(row)) {
    multipleSelection.value = multipleSelection.value.filter((r: any) => r.id !== row.id)
    
  } else {
    multipleSelection.value.push(row)
  }

  console.log(multipleSelection.value)
}

const isSelected = (row: User) => {
  return multipleSelection.value.some((r: User) => r.id === row.id)
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
  console.log("click")
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
