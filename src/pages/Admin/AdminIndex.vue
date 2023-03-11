<template>
  <!-- <div class="common-layout">
    <el-container>
      <el-header style="background-color: rgb(60,60,60);"><adminheader></adminheader></el-header>
      <el-container>
        <el-aside class="aside" :width="store.state.adminMenuisCollapse==false?'160px':'64px'" style="background-color: rgb(40,40,40);"><adminaside></adminaside></el-aside>
        <el-main><adminmain></adminmain></el-main>
      </el-container>
    </el-container>
  </div> -->


  <div class="common-layout">
    <el-container>
      <el-aside class="aside" :width="store.state.adminMenuisCollapse == false ? '200px' : '64px'"
        style="background-color: rgb(40,40,40);">
        <adminaside></adminaside>
      </el-aside>
      <el-container>
        <el-header style="background-color: rgb(60,60,60);">
          <adminheader></adminheader>
        </el-header>
        <el-main>
          <adminmain></adminmain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script lang="ts" setup>
import adminaside from '../../components/Admin/AdminAside.vue'
import adminheader from '../../components/Admin/AdminHeader.vue'
import adminmain from '../../components/Admin/AdminMain.vue'
import store from '../../store/index'
</script>
  
  
<style scoped>
.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default:deep(.el-scrollbar__view) {
  width: 100%;
  height: 100%;
}

.common-layout {
  width: 100%;
  height: 100%;
}

.el-container.is-vertical {
  width: 100%;
  height: 100%;
}

.el-aside {
  transition: all 1s ease;
}

:deep(.el-container) {
  width: 100%;
  height: 100%;
}</style>