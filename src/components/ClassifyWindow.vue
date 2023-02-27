<template>
   <el-scrollbar>
  <el-row>
    <el-col>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
  <el-menu-item v-for="(o,i) in 4" :key="o" :index="i+''">铰链</el-menu-item>
</el-menu>
</el-col>
</el-row>

</el-scrollbar>

<el-row style="background-color: rgb(235, 235, 235);padding-top:2%;">
    <el-col
      v-for="(o, index) in 5"
      :key="o"
      :span="6"
      :offset="index%3==0 ? 1 : 2"
      style="padding-bottom: 2%;"
    >
      <el-card :body-style="{ padding: '0px' }" shadow="hover" @click="Detiledmessage()">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 15px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
<el-row style="background-color: rgb(235,235,235);padding-bottom: 2%;">
    <el-col>
        <el-button type="primary" >上一页</el-button>
        <el-button type="primary" >下一页</el-button>
    </el-col>
</el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter()
const Detiledmessage=()=>{
  router.push({path:'/detiled'});
}

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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