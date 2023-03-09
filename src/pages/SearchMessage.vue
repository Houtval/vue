<template>
  <el-scrollbar>
    <headermessage></headermessage>
      <el-row style="min-height: 500px;background-color: rgb(235, 235, 235);">
        <el-col :span="12">
          <el-card  class="box-card" style="width: 80%;margin: 20px auto;">
                <el-row>
                    <el-col :span="3">
                        <h2>铰链</h2>
                    </el-col>
                </el-row>
            </el-card>
            <el-card v-for="(o,index) in store.state.searchHinge.length" :key="o"  class="box-card" style="width: 80%;margin: 20px auto;" @click="Hinge(index)">
                <el-row>
                    <el-col :span="3">
                        {{ store.state.searchHinge[index]['name'] }}
                    </el-col>
                    <el-col :span="12">

                    </el-col>
                    <el-col :span="9">
                      {{ store.state.searchHinge[index]['id'] }}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>

        <el-col :span="12">
          <el-card  class="box-card" style="width: 80%;margin: 20px auto;">
                <el-row>
                    <el-col :span="3">
                        <h2>滑轨</h2>
                    </el-col>
                </el-row>
            </el-card>
            <el-card v-for="(o,index) in store.state.searchSlide.length" :key="o"  class="box-card" style="width: 80%;margin: 20px auto;" @click="Slide(index)">
                <el-row>
                    <el-col :span="3">
                        {{ store.state.searchSlide[index]['name'] }}
                    </el-col>
                    <el-col :span="18">

                    </el-col>
                    <el-col :span="3">
                        日期
                    </el-col>
                </el-row>
            </el-card>
        </el-col>

      </el-row>

    
    
   
   
    <footermessage></footermessage>

  </el-scrollbar>
    </template>
    <script lang="ts" setup>
    import { ref,reactive } from 'vue'
    import type { FormInstance, FormRules } from 'element-plus'
    import headermessage from '../components/HeaderMessage.vue';
    import footermessage from '../components/FooterMessage.vue';
    import { useRouter } from 'vue-router'
    import store from "../store/index"
    import {
      Document,
      Menu as IconMenu,
      Location,
      Setting,
    } from '@element-plus/icons-vue'
    

 

    const router=useRouter()
    const scrollfunction=()=>{
    
    }
    const Hinge=(index:number)=>{
      store.commit('updateSearch',index)
      router.push({path:'/HingeMessage'});
    }
    const Slide=(index:number)=>{
      console.log(index);
    }
    </script>
    
    <style scoped>
 
    </style>
    