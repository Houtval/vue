<template>
<el-row>
  <el-col>
    <el-card class="box-card" style="border-radius: 0px;">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>

  </el-card>
  </el-col>
</el-row>
</template>
<script lang="ts" setup>
import { ref,reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import store from "../store/index"
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.box-card{
  background-color: rgb(57, 57, 57);
  border: 0px;
  padding: 0px;
  margin: 0px;
  color: white;
}
</style>