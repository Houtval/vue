<template>
  <div style="width: 100%;height: 50px;padding-top: 30px;">
    <span>{{ store.state.adminMenuisCollapse == false ? "管理系统" : "系统" }}</span>
  </div>
  <el-menu default-active="MainIndex" class="el-menu-vertical-demo" :collapse="store.state.adminMenuisCollapse"
    background-color="rgb(40,40,40)" text-color="#fff" active-text-color="#ffd04b" router>
    <el-menu-item index="MainIndex">
      <el-icon>
        <House />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <PictureFilled />
        </el-icon>
        <span>幻灯片管理</span>
      </template>
      <el-menu-item index="Carousel1">
        <el-icon>
          <PictureFilled />
        </el-icon>
        <template #title>幻灯片1</template>
      </el-menu-item>
      <el-menu-item index="Carousel2">
        <el-icon>
          <PictureFilled />
        </el-icon>
        <template #title>幻灯片2</template>
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="Hinge">
      <el-icon>
        <Connection />
      </el-icon>
      <template #title>铰链信息</template>
    </el-menu-item>

    <el-menu-item index="Slide">
      <el-icon>
        <SemiSelect />
      </el-icon>
      <template #title>滑轨信息</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import store from '../../store/index'

</script>
      
      
<style scoped>
.el-menu {
  border-right: 0px;
}
</style>