<template>
  <el-scrollbar>
    <headermessage></headermessage>
    <el-row style="min-height: 500px;background-color: rgb(235, 235, 235);">
      <el-col :span="12">
        <el-card class="box-card" style="width: 80%;margin: 20px auto;">
          <el-row>
            <el-col :span="3">
              <h2>铰链</h2>
            </el-col>
          </el-row>
        </el-card>
        <el-card v-for="(o, index) in store.state.searchHinge.length" :key="index" class="box-card"
          style="width: 80%;margin: 20px auto;cursor: pointer;" @click="Hinge(index)">
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
        <el-card class="box-card" style="width: 80%;margin: 20px auto;">
          <el-row>
            <el-col :span="3">
              <h2>滑轨</h2>
            </el-col>
          </el-row>
        </el-card>
        <el-card v-for="(o, index) in store.state.searchHinge.length" :key="o" class="box-card"
          style="width: 80%;margin: 20px auto;cursor: pointer;" @click="Slide(index)">
          <el-row>
            <el-col :span="3">
              {{ store.state.searchSlide[index]['name'] }}
            </el-col>
            <el-col :span="12">

            </el-col>
            <el-col :span="9">
              {{ store.state.searchSlide[index]['id'] }}
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <footermessage></footermessage>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import headermessage from '../components/HeaderMessage.vue';
import footermessage from '../components/FooterMessage.vue';
import { useRouter, useRoute } from 'vue-router'
import store from "../store/index"
import { onMounted, onUpdated, onUnmounted } from 'vue'
const router = useRouter()
const route = useRoute()
onMounted(() => {
  const search = route.query.search as any
  store.commit('updateSearch', search)
  store.dispatch('searchSlide')
  store.dispatch('searchHinge')
})

const search = route.query.search as any
const Hinge = (index: number) => {
  router.push({ path: '/SearchHingeMessage', query: { id: index, search: search } });
}
const Slide = (index: number) => {
  router.push({ path: '/SearchSildeMessage', query: { id: index, search: search } });
}
</script>
    
<style scoped></style>
    