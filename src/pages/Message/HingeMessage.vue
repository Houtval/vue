<template>
    <el-scrollbar>
      <headermessage></headermessage>
        <el-row style="background-color: rgb(235, 235, 235);padding-top:2%;padding-bottom: 2%;">
          <el-col style="padding-bottom: 2%;padding-left: 10%;">
      <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品信息</el-breadcrumb-item>
    </el-breadcrumb>
          </el-col>
          <el-col>
              <el-card class="box-card" style="width: 80%;margin: 0 auto;padding-bottom: 2%;">
                  <div class="demo-image__preview">
          <el-image
            style="width: 100%;height:200px;"
          />
        </div>
        <h1>{{ store.state.allHinge[store.state.indexhinge]["name"] }}</h1>
        <ul>
          <li>型号：{{ store.state.allHinge[store.state.indexhinge]["model"] }}</li>
          <li>铰杯安装：{{ store.state.allHinge[store.state.indexhinge]["hingeCupInstallation"] }}</li>
          <li>门板/门框材质：{{ store.state.allHinge[store.state.indexhinge]["installationMaterial"] }}</li>
          <li>安装方式：{{ store.state.allHinge[store.state.indexhinge]["installationMethod"] }}</li>
          <li>关闭系统：{{ store.state.allHinge[store.state.indexhinge]["shutDownSystem"] }}</li>
          <li>阻尼系统：{{ store.state.allHinge[store.state.indexhinge]["dampingSystem"]}}</li>
          <li>开启角度：{{ store.state.allHinge[store.state.indexhinge]["openingAngle"] }}</li>
          <li>大角度铰链：{{ store.state.allHinge[store.state.indexhinge]["largeAngleHinge"] }}</li>
          <li>门板调节：{{ store.state.allHinge[store.state.indexhinge]["doorPanelAdjustment"] }}</li>
          <li>铰链底座：{{ store.state.allHinge[store.state.indexhinge]["hingeBase"] }}</li>
          <li>可選設備：{{ store.state.allHinge[store.state.indexhinge]["optionalEquipment"] }}</li>
          
        </ul>
              </el-card>
          </el-col>
        </el-row>
      <footermessage></footermessage>
    </el-scrollbar>
      </template>
      <script lang="ts" setup>
      import { ref,reactive } from 'vue'
      import type { FormInstance, FormRules } from 'element-plus'
      import headermessage from '../../components/HeaderMessage.vue';
      import footermessage from '../../components/FooterMessage.vue';
      import{ useRouter } from "vue-router"
      import store from "../../store/index"
      import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
      } from '@element-plus/icons-vue'
  
      const router=useRouter()
      const url =
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      const srcList = [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ]
      const scrollfunction=()=>{
      
      }
  
      const activeNames = ref(['1'])
      const handleChange = (val: string[]) => {
      console.log(val)
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
      