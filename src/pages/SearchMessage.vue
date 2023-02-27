<template>
  <el-scrollbar>
    <headermessage></headermessage>
      <el-row style="min-height: 500px;background-color: rgb(235, 235, 235);">
        <el-col>
    
            <el-card v-for="(o,index) in 10" :key="o"  class="box-card" style="width: 80%;margin: 20px auto;" @click="detiled()">
                <el-row>
                    <el-col :span="3">
                        测试
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
    const detiled=()=>{
      router.push({path:'/detiled'});
    }
    </script>
    
    <style scoped>
 
    </style>
    