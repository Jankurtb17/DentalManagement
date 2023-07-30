import 'element-plus/theme-chalk/index.css'
import type { App } from 'vue'
import { 
  ElRow,
  ElCol,
  ElMenu,
  ElContainer,
  ElAside,
  ElMain,
  ElMenuItem,
  ElSubMenu,
  ElButton,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElCard,
  ElInput,
  ElMessage,
  ElUpload,
  ElTree,
  ElTag,
  ElTabs,
  ElTabPane,
  ElTooltip,
  ElDatePicker,
  ElScrollbar,
  ElConfigProvider,
  ElIcon,
  ElLoading,
  ElDescriptions,
  ElDialog,
  ElSpace,
  ElSwitch,
  ElDivider,
  ElOption,
  ElInputNumber,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPageHeader,
  ElPagination,
  ElProgress,
  ElCalendar,
  ElTimeline,
  ElTimelineItem,
  ElSelect,
  ElTimePicker,
  ElNotification,
  ElEmpty,
  ElSkeleton,
  ElSkeletonItem,
  ElTimeSelect,
  ElDrawer,
  ElStatistic,
  ElAvatar
} from "element-plus";

import {
  ZoomIn,
  Edit,
  Delete,
  CirclePlus,
  View,
  Search,
  EditPen,
  Close,
  User,
  UserFilled,
  Download,
  Refresh,
  Connection,
  CircleCloseFilled,
  SuccessFilled,
  Back,
  ArrowDown,
  Expand,
  Fold,
  Memo,
  Menu,
  SwitchButton,
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  Histogram,
  Calendar,
  CreditCard,
  Setting,
  
} from "@element-plus/icons-vue";

export default (app: App): void => {
  app
    .use(ElRow)
    .use(ElCol)
    .use(ElMenu)
    .use(ElTimeSelect)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMain)
    .use(ElTimePicker)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .use(ElSpace)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElTable)
    .use(ElEmpty)
    .use(ElTableColumn)
    .use(ElCard)
    .use(ElInput)
    .use(ElMessage)
    .use(ElSkeleton)
    .use(ElSkeletonItem)
    .use(ElUpload)
    .use(ElTree)
    .use(ElTag)
    .use(ElTabs)
    .use(ElNotification)
    .use(ElTabPane)
    .use(ElTooltip)
    .use(ElDatePicker)
    .use(ElScrollbar)
    .use(ElConfigProvider)
    .use(ElIcon)
    .use(ElLoading)
    .use(ElDescriptions)
    .use(ElDialog)
    .use(ElSwitch)
    .use(ElDivider)
    .use(ElOption)
    .use(ElInputNumber)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .use(ElPageHeader)
    .use(ElPagination)
    .use(ElProgress)
    .use(ElCalendar)
    .use(ElTimeline)
    .use(ElTimelineItem)
    .use(ElSelect)
    .use(ElDrawer)
    .use(ElStatistic)
    .use(ElAvatar)
    .component("el-icon-zoomin", ZoomIn)
    .component("Edit", Edit)
    .component("Delete", Delete)
    .component("Add", CirclePlus)
    .component("View", View)
    .component("EditPen", EditPen)
    .component("User", User)
    .component("Close", Close)
    .component("UserFilled", UserFilled)
    .component("Download", Download)
    .component("Refresh", Refresh)
    .component("Connection", Connection)
    .component("CirclePlus", CirclePlus)
    .component("CicleCloseFilled", CircleCloseFilled)
    .component("SuccessFilled", SuccessFilled)
    .component("CircleCheck", CircleCheck)
    .component("Back", Back)
    .component("ArrowDown", ArrowDown)
    .component("Expand", Expand)
    .component("Fold", Fold)
    .component("Memo", Memo)
    .component("Menu", Menu)
    .component("SwitchButton", SwitchButton)
    .component("ArrowLeft", ArrowLeft)
    .component("ArrowRight", ArrowRight)
    .component("Histogram", Histogram)
    .component("Calendar", Calendar)
    .component("CreditCard", CreditCard)
    .component("Setting", Setting)
}