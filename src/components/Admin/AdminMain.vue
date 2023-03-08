<template>
     <el-scrollbar>   
    <router-view></router-view>  
    </el-scrollbar>
</template>
      
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import store from "../../store/index"
import { onMounted, onUpdated, onUnmounted} from 'vue'
const router=useRouter()
if(localStorage.getItem("id")?.toString()==null)
{
  ElMessage({
              message: '您未登录，请先登录',
                  type: 'error',
                  })
  router.push({path:'/AdminPage'});
}
onMounted(() => { 
   store.dispatch('allSlide')  
   router.push({path:'/AdminIndex/MainIndex'})
})
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