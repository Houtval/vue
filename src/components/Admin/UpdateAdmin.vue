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
    <el-form-item  prop="name" label="用户名">
      <el-input v-model="ruleForm.name" size="large"/>
    </el-form-item>
    <el-form-item  prop="oldPassword" label="旧密码">
      <el-input v-model="ruleForm.oldPassword" size="large"/>
    </el-form-item>
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

import store from "../../store/index"
const router=useRouter()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  oldPassword: '',
  newPassword: '',
})


const rules = reactive<FormRules>({
  name: [
    { required: true, message: '输入用户名', trigger: 'blur' },
  ],
  oldPassword: [
    { required: true, message: '输入旧密码', trigger: 'blur' },
  ],
  newPassword: [
    { required: true, message: '输入新密码', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
    ElMessage({
    message: '修改成功!请重新登录',
    type: 'success',
  })
      router.push({path:'/AdminPage'});
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