<template>
    <div style="width:100%;">
<el-card class="box-card" style="border: none;box-shadow: none;margin: 0 auto;">
    <template #header>
      <div class="card-header">
        <h3>修改密码</h3>
      </div>
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
    <el-form-item  prop="newPassword" label="新密码">
      <el-input v-model="ruleForm.newPassword" size="large"/>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)" size="large">
            修改
      </el-button>
      <el-button type="primary" @click="clearForm(ruleFormRef)" size="large">
        重置
      </el-button>
    </el-form-item>
  </el-form>

  </el-card>
</div>
</template>
     
<script lang="ts" setup>
import { ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

import {apiUpdatePassword} from '../../api/adminControllers'
import store from "../../store/index"
const router=useRouter()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  newPassword: '',
})


const rules = reactive<FormRules>({
  newPassword: [
    { required: true, message: '输入密码', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
    apiUpdatePassword(store.state.Id,ruleForm.newPassword).then((res)=>{
        if(res.data.code=="20000")
        {
          ElMessage({
                  message: '修改成功!请重新登录',
                  type: 'success',
                  })
                  router.push({path:'/AdminPage'});
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
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-ruleForm{
    margin: 0 auto;
}

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