<template>
<el-row style="padding-top: 20px;">
    <el-col :span="1" style="display: flex;justify-content: left;">
        <el-icon @click="updateMenu()"><component :is="store.state.adminMenuisCollapse==false?'Fold':'Expand'" style="cursor: pointer;"></component></el-icon>
    </el-col>

    <el-col :span="20">
      
    </el-col>

    <el-col :span="3" style="display: flex;justify-content: right;">
        <el-dropdown trigger="click" style="cursor: pointer;">
    <span class="el-dropdown-link" style="color:white">
        {{ id }}
      <el-icon class="el-icon--right" color="white">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="updateAdmin()">修改信息</el-dropdown-item>
        <el-dropdown-item @click="exit()">注销</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

        
    </el-col>
</el-row>

</template>
      
<script lang="ts" setup>
import store from '../../store/index';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
const updateMenu=()=>{
store.commit("updateadminMenuisCollapse");
}

const id=localStorage.getItem("id")?.toString()==null?null:localStorage.getItem("id")?.toString()
const exit=()=>{
  localStorage.removeItem("id")
  ElMessage({
    message: '注销成功!',
    type: 'success',
  })
  store.commit('muMenuState');
  router.push({path:'/indexpage'});
    
}
const updateAdmin=()=>{
  router.push({path:'/AdminIndex/UpdateAdmin'});
}
</script>
      
      
<style scoped>
      .example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>