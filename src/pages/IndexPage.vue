<template>
  <el-scrollbar>
    <headermessage></headermessage>
    <el-row style="background-color: rgb(235,235,235);">
      <el-col :span="24">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in store.state.allCarousel1.length" :key="item">
            <img :src="store.state.allCarousel1[item]" class="image" />
          </el-carousel-item>
        </el-carousel>

        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="item in store.state.allCarousel2.length" :key="item">
            <img :src="store.state.allCarousel2[item]" class="image" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>


    <el-scrollbar>
      <el-row>
        <el-col>
          <el-menu default-active="/indexpage/hingeall" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            router>


            <el-menu-item index="/indexpage/hingeall">
              <el-icon>
                <Connection />
              </el-icon>
              <template #title>铰链</template>
            </el-menu-item>

            <el-menu-item index="/indexpage/slideall">
              <el-icon>
                <SemiSelect />
              </el-icon>
              <template #title>滑轨</template>
            </el-menu-item>

          </el-menu>
        </el-col>
      </el-row>
    </el-scrollbar>

    <router-view></router-view>
    <footermessage></footermessage>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import headermessage from '../components/HeaderMessage.vue';
import footermessage from '../components/FooterMessage.vue';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import store from '../store/index';
const router = useRouter()


store.dispatch('allSlide')
store.dispatch('allHinge')
store.dispatch('allMenu')
store.dispatch('allCarousel1')
store.dispatch('allCarousel2')


onMounted(() => {
  router.push({ path: '/indexpage/hingeall' })
})
const handleSelect = (key: string, keyPath: string[]) => {

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

.image {
  width: 100%;
  height: 100%;
}
</style>
