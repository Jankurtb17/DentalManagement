import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

export const formRules = reactive<FormRules>({
  email: [{ required: true, message: 'Please enter an email', trigger: 'blur' }],
})
