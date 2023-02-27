<template>
  <el-row style="padding-top: 2%;padding-bottom: 2%;">
    <el-col :span="2"><el-icon  :size="20" color="black" @click="index()" ><House /></el-icon></el-col>
    <el-col :span="14"></el-col>
    <el-col :span="4"></el-col>
    <el-col :span="2"><el-icon  :size="20" color="black" @click="openSearch()"><Search /></el-icon></el-col>
    <el-col :span="2"><el-icon :size="20" color="black" @click="openMenuOrClose()"><Menu /></el-icon></el-col>
  </el-row>

  <el-row>
    <el-col>
      <el-drawer v-model="store.state.searchState" :show-close="false" direction="ttb" class="searchwindow">
    <template #header="{ close, titleId, titleClass }">
      <h1 :id="titleId" :class="titleClass">搜索</h1>
    </template>
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    :inline="true"
  >
    <el-form-item  prop="search">
      <el-input v-model="ruleForm.search" size="large"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)" size="large">
        查询
      </el-button>
    </el-form-item>
  </el-form>
  </el-drawer>
    </el-col>
  </el-row>

  <el-row>
    <el-col>
  <el-drawer v-model="store.state.menuState" title="I am the title" :with-header="false" direction="ltr" :size="280">
    <el-row class="tac" style="margin: 0 auto;width: 80%;">
    <el-col :span="24">
      <h2 class="mb-2" style="color:black;">菜单栏</h2>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
        
      >
        <!-- <el-sub-menu index="1">
          <template #title>
            <span>关于xx</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">董事长寄语</el-menu-item>
            <el-menu-item index="1-2">xx概况</el-menu-item>
            <el-menu-item index="1-3">xx概况</el-menu-item>
            <el-menu-item index="1-4">生产基地</el-menu-item>
            <el-menu-item index="1-5">xx历史</el-menu-item>
            <el-menu-item index="1-6">xx文化</el-menu-item>
            <el-menu-item index="1-6">xx优势</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu> -->

        <el-menu-item index="AdminPage">
          <el-icon><Avatar /></el-icon>
          <span>管理员登录</span>
        </el-menu-item>

      </el-menu>
     
    </el-col>
  </el-row>



  </el-drawer>
    </el-col>
  </el-row>

</template>
<script lang="ts" setup>
import { ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import store from "../store/index"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
House,
} from '@element-plus/icons-vue'
const drawer = ref(false)
const router=useRouter()
const isCollapse = ref(true)
const openMenuOrClose=()=>{
  store.commit('muMenuState')
}
const openSearch=()=>{
  store.commit('musearchState')
}
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  search: '',
})
const index=()=>{
  router.push({path:'/indexpage'});
}

const rules = reactive<FormRules>({
  search: [
    { required: true, message: '输入查询的信息', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      store.commit('musearchState')
      router.push({path:'/search'});

    } else {
      
    }
  })
}

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
:deep(.searchwindow.el-drawer.ttb) {
  background-color: transparent;
}
:deep(.el-form-item__error){
  font-size: 20px;
}
.el-drawer__title{
  font-size: 30px;
  color: #409EFF;
}
.el-menu{
  border-right: 0px;
}
</style>