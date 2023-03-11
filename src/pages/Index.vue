<template>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import indexpage from './IndexPage.vue'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import store from "../store/index"
import { onMounted, onUpdated, onUnmounted } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
onMounted(() => {


})
</script>

<style scoped></style>