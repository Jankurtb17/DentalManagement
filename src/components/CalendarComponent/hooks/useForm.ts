import { reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'

interface FormType {
  appointment_date: string
  name: string
  startTime: string
  endTime: string
  procedure: string
  payment: string
  price: number
  cancelled?: boolean
}

export interface ListOptionItem {
  value: string
  label: string
}

export const caseType = [
  'Wisdom Tooth removal',
  'Dental extraction',
  'Dental implant',
  'Dentures',
  'Dental sealant',
  'Dental braces',
  'Veneer',
  'Root canal',
  'Bridge',
  'Crown',
  'Teeth Whitening',
  'Teeth Cleaning',
  'Tooth Filling'
]

export function useCalendarForm() {
  const form = reactive<FormType>({
    appointment_date: '',
    name: '',
    startTime: '',
    endTime: '',
    procedure: '',
    payment: '',
    price: 0
  })

  const rules = reactive<FormRules>({
    name: [
      {
        trigger: 'change',
        required: true,
        message: 'Please enter a label'
      }
    ]
  })

  return {
    rules,
    form
  }
}