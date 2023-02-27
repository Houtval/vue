<template>
     <el-scrollbar>   
    <router-view></router-view>  
    </el-scrollbar>
</template>
      
<script lang="ts" setup>
      
</script>
      
      
<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>