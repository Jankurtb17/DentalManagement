<template>
  <BaseLayout>
    <template #header>
      <el-icon color="#445ec1" :size="50"><Calendar /></el-icon>
      <span>Patient List</span>
    </template>
    <template #extra>
      <BreadCrumb>
        <template #content>
          <el-breadcrumb-item :to="{ path: '/dashboard' }">Overview</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/patient-list' }">Patient List</el-breadcrumb-item>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button :icon="Printer">Print</el-button>
            <el-dropdown>
              <el-button type="info" :icon="Filter">
                Filter <el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Gender</el-dropdown-item>
                  <el-dropdown-item>City</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button :icon="User" type="primary" @click="createVisible = true"
              >Add New Patients</el-button
            >
          </div>
        </template>
      </BreadCrumb>
    </template>
    <template #body>
      <AppTable :isLoading="status.isLoading" :data="users" />
      <AppModal v-model="deleteUser">
        <template #body> Delete User </template>
      </AppModal>

      <AppModal v-model="createVisible">
        <template #body>
          <el-steps finish-status="success" space="200" :active="active" simple>
            <el-step title="Personal Information" :icon="Edit" />
            <el-step title="Address" :icon="LocationFilled" />
            <el-step title="Upload " :icon="UploadFilled" />
          </el-steps>
          <el-form>
            <transition name="slide">
              <div class="personal" v-show="showInfo">
                <div class="form-name">
                  <el-form-item>
                    <span>First Name</span>
                    <el-input v-model="form.first_name" />
                  </el-form-item>
                  <el-form-item>
                    <span>Last Name</span>
                    <el-input v-model="form.last_name" />
                  </el-form-item>
                  <el-form-item>
                    <span>Middle Name</span>
                    <el-input v-model="form.middle_name" />
                  </el-form-item>
                </div>
                <div class="form-name">
                  <el-form-item>
                    <span>Date of birth</span>
                    <el-date-picker
                      style="width: 100%"
                      format="MM/DD/YYYY"
                      placeholder="MM/DD/YYYY"
                      v-model="form.date_of_birth"
                    />
                  </el-form-item>
                  <el-form-item>
                    <span>Email</span>
                    <el-input v-model="form.email" />
                  </el-form-item>
                  <el-form-item>
                    <span>Phone Number</span>
                    <el-input v-model="form.phone_number" />
                  </el-form-item>
                </div>
                <div class="form-name">
                  <el-form-item>
                    <span>Sex by birth</span>
                    <el-select v-model="form.sex" style="width: 100%">
                      <el-option value="Male">Male</el-option>
                      <el-option value="Female">Female</el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
            </transition>
            <transition name="slide">
              <div class="address" v-show="showAddress">
                <div class="form-name">
                  <el-form-item>
                    <span>House/Lot Number</span>
                    <el-input v-model="form.lot_number" />
                  </el-form-item>
                  <el-form-item>
                    <span>Street</span>
                    <el-input v-model="form.street" />
                  </el-form-item>
                  <el-form-item>
                    <span>City/Municipality</span>
                    <el-select
                      filterable
                      remote
                      :remote-method="findCity"
                      v-model="form.city"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="city in cities"
                        :key="city"
                        :value="city.name"
                        :label="city.name"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>

                <div class="form-name">
                  <el-form-item>
                    <span>Barangay</span>
                    <el-select
                      filterable
                      remote
                      :remote-method="getBrgy"
                      v-model="form.brgy"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="barangay in brgy"
                        :key="barangay"
                        :value="barangay.name"
                        :label="barangay.name"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
            </transition>
            <transition name="slide">
              <div v-if="verifyInfo">
                <span>Verify Info</span>
              </div>
            </transition>
          </el-form>
        </template>

        <template #footer>
          <div class="next-btn">
            <el-button round @click="prev" :disabled="disablePrev">Previous</el-button>
            <el-button :icon="Right" type="primary" round @click="next">{{
              active === 2 ? 'finish' : 'next'
            }}</el-button>
          </div>
        </template>
      </AppModal>
    </template>
  </BaseLayout>
</template>

<script lang="ts" setup>
import AppModal from '@/components/AppModal.vue'
import BaseLayout from '@/base/BaseLayout.vue'
import AppTable from '@/components/AppTable.vue'
import {
  Printer,
  Filter,
  Plus,
  User,
  Edit,
  Picture,
  UploadFilled,
  Right,
  LocationFilled
} from '@element-plus/icons-vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import useClient from '@/composables/Clients'
import { ref, reactive, onMounted, watch, computed } from 'vue'
import type { ClientInformation } from '@/services/client'
import phil from 'phil-reg-prov-mun-brgy'
const loading = ref(false)
const form = reactive({} as ClientInformation)
const { getAllClients, status } = useClient()
const users = ref([])
const cities = ref([] as City[])
const brgy = ref([])
const deleteUser = ref(false)
const createVisible = ref(false)
const active = ref(0)
const showInfo = ref(true)
const showAddress = ref(false)
const verifyInfo = ref(false)
const disablePrev = ref(true)
const cityMunCode = ref<string>('')
type City = {
  name: string
  mun_code: string
  prov_code: string
}

const getData = async () => {
  try {
    const data = await getAllClients()
    users.value = data
  } catch (error) {
    console.log(error)
  }
}

const next = () => {
  active.value += 1
  if (active.value > 0) {
    disablePrev.value = false
  }
}

const prev = () => {
  active.value -= 1
  if (active.value === 0) {
    disablePrev.value = true
  }
}

const findCity = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      cities.value = phil.city_mun.filter((item: City) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
      cityMunCode.value = cities.value.map((item: City) => item.mun_code as string)
    }, 200)
  } else {  
    cities.value = []
  }
}

const getBrgy = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      brgy.value = findBrgy.value.filter((item: any) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    cities.value = []
  }
}

const findBrgy = computed(() => {
  return phil.getBarangayByMun(cityMunCode.value)
})

watch(active, (newVal) => {
  if (newVal === 0) {
    showInfo.value = true
    showAddress.value = false
    verifyInfo.value = false
  } else if (newVal === 1) {
    showInfo.value = false
    showAddress.value = true
    verifyInfo.value = false
  } else if (newVal === 2) {
    showInfo.value = false
    showAddress.value = false
    verifyInfo.value = true
  }
})

watch(createVisible, (newVal) => {
  if (newVal === false) {
    active.value = 0
  }
})

onMounted(() => {
  getData()
  console.log(phil.provinces)
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

.el-form {
  margin-top: 30px;
}

.form-name {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.personal {
  position: relative;
}

.address {
  position: relative;
}

.next-btn {
  display: flex;
  justify-content: space-between;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
  display: none;
}
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
  display: none;
}

@keyframes hide {
  0% {
    opacity: 0;
  }
  20% {
    visibility: hidden;
  }
}
</style>
