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
        <el-card class="box-card" style="width: 80%;margin: 0 auto;padding-bottom: 2%;"
          v-if="view && id != null && search != null">
          <div class="demo-image__preview">
            <el-image style="width: 100%;height:200px;" :src="store.state.searchHinge[id]['url']" />
          </div>
          <h1>{{ store.state.searchHinge[id]["name"] }}</h1>
          <ul>
            <li>型号：{{ store.state.searchHinge[id]["model"] }}</li>
            <li>铰杯安装：{{ store.state.searchHinge[id]["hingeCupInstallation"] }}</li>
            <li>门板/门框材质：{{ store.state.searchHinge[id]["installationMaterial"] }}</li>
            <li>安装方式：{{ store.state.searchHinge[id]["installationMethod"] }}</li>
            <li>关闭系统：{{ store.state.searchHinge[id]["shutDownSystem"] }}</li>
            <li>阻尼系统：{{ store.state.searchHinge[id]["dampingSystem"] }}</li>
            <li>开启角度：{{ store.state.searchHinge[id]["openingAngle"] }}</li>
            <li>大角度铰链：{{ store.state.searchHinge[id]["largeAngleHinge"] }}</li>
            <li>门板调节：{{ store.state.searchHinge[id]["doorPanelAdjustment"] }}</li>
            <li>铰链底座：{{ store.state.searchHinge[id]["hingeBase"] }}</li>
            <li>可選設備：{{ store.state.searchHinge[id]["optionalEquipment"] }}</li>

          </ul>
        </el-card>
      </el-col>
    </el-row>
    <footermessage></footermessage>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import headermessage from '../../components/HeaderMessage.vue';
import footermessage from '../../components/FooterMessage.vue';
import { ref } from 'vue';
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { useRoute } from "vue-router"
import store from "../../store/index"
const route = useRoute()
const id = route.query.id as any
const search = route.query.search as any
store.commit('updateSearch', search)
store.dispatch('searchHinge')

const view = ref(false)
setInterval(() => {

  view.value = true;
}, 1)
</script>
      
<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}

.el-menu-demo {
  min-width: max-content;
}

.image {
  width: 100%;
}

.scrollbar-flex-content {
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

li {
  text-align: left;
}

.el-card.is-hover-shadow {
  margin-bottom: 20px;
  border-radius: 0px;
}

.el-button--primary {
  border-radius: 0px;
}
</style>
      