<template>
  <el-row >

<el-col style="display: flex;justify-content: center;padding-top: 10%;">
<el-card class="box-card">
    <template #header>
      <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">登录</el-col>
        <el-col :span="8"></el-col>
      </el-row>
       
    </template>

        
        <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    label-position="left"
  >
    <el-form-item  prop="username" label="用户名">
      <el-input v-model="ruleForm.username" size="large"/>
       
    </el-form-item>

    <el-form-item  prop="password" label="密码">
      <el-input v-model="ruleForm.password" size="large"/>
       
    </el-form-item>
  </el-form>
      <el-button type="primary" @click="submitForm(ruleFormRef)" size="large">
        登录
      </el-button>
      <el-button type="primary" @click="clearForm(ruleFormRef)" size="large">
        重置
      </el-button>
  </el-card>
</el-col>
</el-row>
</template>

<script lang="ts" setup>
import store from '../../store/index'
import { ref,reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import{ useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import {apiLogin} from '../../api/adminControllers'
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const router=useRouter()
const ruleForm = reactive({
  username: '',
  password: ''
  
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      apiLogin(ruleForm.username,ruleForm.password).then((res)=>{
        if(res.data.code=="20000")
        {
        ElMessage({
        message: '登录成功!',
        type: 'success',
        })
        localStorage.setItem("id", ruleForm.username);
        store.dispatch('allSlide')   
        router.push({path:'/AdminIndex'});   
        }
        else{
          ElMessage({
        message: res.data.message,
        type: 'error',
        })
        }

  })
     
     
    } else {
      
    }
  })
}


const clearForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>


<style scoped>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>