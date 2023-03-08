<template>
  
<router-view></router-view>
</template>
<script lang="ts" setup>
import indexpage from './IndexPage.vue'
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
store.dispatch('allSlide') 
</script>

<style scoped>

</style>