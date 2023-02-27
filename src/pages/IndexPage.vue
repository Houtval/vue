<template>
 <el-scrollbar>
<headermessage></headermessage>
<el-row style="background-color: rgb(235,235,235);">
    <el-col :span="24">s
      <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <img
          src=""
          class="image"
        />
    </el-carousel-item>
  </el-carousel>

    <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="item in 6" :key="item">
      <img
          src=""
          class="image"
          @click="Detiledmessage()"
        />
    </el-carousel-item>
  </el-carousel>
  </el-col>
</el-row>

  <classifywindow></classifywindow>
<footermessage></footermessage>
</el-scrollbar>
</template>
<script lang="ts" setup>
import headermessage from '../components/HeaderMessage.vue';
import footermessage from '../components/FooterMessage.vue';
import classifywindow from '../components/ClassifyWindow.vue'
import {apiLogin} from '../api/adminControllers'
import { useRouter } from 'vue-router'
import { ref,reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import store from "../store/index"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
apiLogin("32","4234");
const router = useRouter()
const Detiledmessage=()=>{
  router.push({path:'/detiled'});
}
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.image{
  width: 100%;
  height: 100%;
}

</style>
