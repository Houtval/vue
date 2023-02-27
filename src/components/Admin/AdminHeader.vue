<template>
<el-row style="padding-top: 20px;">
    <el-col :span="1" style="display: flex;justify-content: left;">
        <el-icon @click="updateMenu()"><component :is="store.state.adminMenuisCollapse==false?'Fold':'Expand'"></component></el-icon>
    </el-col>

    <el-col :span="20">
      
    </el-col>

    <el-col :span="3" style="display: flex;justify-content: right;">
        <el-dropdown trigger="click">
    <span class="el-dropdown-link" style="color:white">
        用户
      <el-icon class="el-icon--right" color="white">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>修改信息</el-dropdown-item>
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
const router = useRouter()
const updateMenu=()=>{
store.commit("updateadminMenuisCollapse");
}
const exit=()=>{
    router.push({path:'/indexpage'});
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