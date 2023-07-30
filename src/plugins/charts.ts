import type { App } from 'vue'
import { 
  Chart,
  registerables
} from 'chart.js'

Chart.register(...registerables)