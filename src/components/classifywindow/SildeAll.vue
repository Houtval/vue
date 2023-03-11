<template>
    <el-row style="background-color: rgb(235, 235, 235);padding-top:2%;">
        <el-col
          v-for="(o, index) in store.state.allSlide.length"
          :key="o"
          :span="6"
          :offset="index%3==0 ? 1 : 2"
          style="padding-bottom: 2%;"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover" @click="Detiledmessage(index)" style="cursor: pointer;">
            <img
              :src="store.state.allSlide[index]['url']"
              class="image"
            />
            <div style="padding: 15px">
              <span>{{ store.state.allSlide[index]["name"] }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
   
    </template>
    
    <script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import store from '../../store/index';
    const router=useRouter()
    const Detiledmessage=(index:number)=>{
     router.push({path:'/AllSildeMessage',query: { id:index }});
    }
    
    
    </script>
        
    <style scoped>
    .demo-image__error .image-slot {
      font-size: 30px;
    }
    .el-menu-demo{
        min-width: max-content;
    }
    .image{
      width: 100%;
      height: 200px;
    }
    .scrollbar-flex-content{
        width: 100vh;
        background-color: white;
    }
    .demo-image__error .image-slot .el-icon {
      font-size: 30px;
    }
    .demo-image__error .el-image {
      width: 100%;
      height: 200px;
    }
    li{
        text-align: left;
    }
    .el-card.is-hover-shadow
    {
    margin-bottom: 20px;
    border-radius: 0px;
    }
    .el-button--primary{
        border-radius: 0px;
    }
    </style>