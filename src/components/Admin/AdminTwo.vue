<template>
    <el-card class="box-card">
      <template #header>
  
          <h3>滑轨信息</h3>
      </template>
        <el-row>
  
            <el-col :span="8" style="display: flex;justify-content: left;">
                <el-button size="large" @click="dialogdAddVisible = true">添加信息</el-button>
            </el-col>
  
            <el-col :span="8">
  
            </el-col>
  
            <el-col :span="8">
                <el-input v-model="search" size="large" placeholder="搜索" />
            </el-col>
  
        </el-row>
  
    </el-card>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Id" prop="id" />
        <el-table-column label="名字" prop="name" />
        <el-table-column label="应用" prop="application" />
        <el-table-column label="特点" prop="characteristic" />
        <el-table-column label="寿命" prop="life" />
        <el-table-column label="负载" prop="loads" />
        <el-table-column label="材料" prop="material" />
        <el-table-column label="型号" prop="model" />
        <el-table-column label="节数" prop="section" />
        <el-table-column label="厚度" prop="size" />
        <el-table-column label="规格" prop="specifications" />
        <el-table-column label="Url" prop="url" />
        <el-table-column fixed="right" width="510">
            <template #header>
                <span style="text-align: center;">
                    操作
                </span>
            </template>
            <template #default="scope">
  
                <el-button size="default" type="danger" @click="handleDelete(scope.$index, scope.row)">删除信息</el-button>
                <el-button size="default" type="danger" @click="handleEdit(scope.$index, scope.row)">修改信息</el-button>
                <el-button size="default"  @click="handleImageAdd(scope.$index, scope.row)">上传图片</el-button>
                <el-button size="default"  @click="handleImageEdit(scope.$index, scope.row)">修改图片</el-button>
                <el-button size="default"  @click="handleImageDel(scope.$index, scope.row)">删除图片</el-button>
            </template>
        </el-table-column>
    </el-table>
  
    <el-row>
        <el-col>
  
            <el-dialog v-model="dialogEditVisible" title="修改信息" style="min-width:80%">
                <el-form ref="ruleFormRefEdit" :model="ruleFormEdit" :rules="rulesEdit" label-width="120px"
                    class="demo-ruleF" :size="formSize" status-icon label-position="left">
                    <el-form-item prop="name" label="名称">
                        <el-input v-model="ruleFormEdit.name" size="default" />
                    </el-form-item>
                    <el-form-item prop="model" label="型号">
                        <el-input v-model="ruleFormEdit.model" size="default" />
                    </el-form-item>
                    <el-form-item prop="application" label="应用">
                        <el-input v-model="ruleFormEdit.application" size="default" />
                    </el-form-item>
                    <el-form-item prop="characteristic" label="特点">
                        <el-input v-model="ruleFormEdit.characteristic" size="default" />
                    </el-form-item>
                    <el-form-item prop="life" label="寿命">
                        <el-input v-model="ruleFormEdit.life" size="default" />
                    </el-form-item>
                    <el-form-item prop="loads" label="负载">
                        <el-input v-model="ruleFormEdit.loads" size="default" />
                    </el-form-item>
                    <el-form-item prop="section" label="节数">
                        <el-input v-model="ruleFormEdit.section" size="default" />
                    </el-form-item>
                    <el-form-item prop="material" label="材料">
                        <el-input v-model="ruleFormEdit.material" size="default" />
                    </el-form-item>
                    <el-form-item prop="size" label="厚度">
                        <el-input v-model="ruleFormEdit.size" size="default" />
                    </el-form-item>
                    <el-form-item prop="specifications" label="规格">
                        <el-input v-model="ruleFormEdit.specifications" size="default" />
                    </el-form-item>
                </el-form>
  
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="danger" @click=clearFormEdit(ruleFormRefEdit)>重置</el-button>
                        <el-button type="primary" @click="submitFormEdit(ruleFormRefEdit)">
                            修改
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
  
    <el-row>
        <el-col>
            <el-dialog v-model="dialogdAddVisible" title="添加信息" style="min-width:80%">
  
  
                <el-form ref="ruleFormRefAdd" :model="ruleFormAdd" :rules="rulesAdd" label-width="120px"
                    class="demo-ruleForm" :size="formSize" status-icon label-position="left">
                    <el-form-item prop="name" label="名称">
                        <el-input v-model="ruleFormAdd.name" size="default" />
                    </el-form-item>
                    <el-form-item prop="model" label="型号">
                        <el-input v-model="ruleFormAdd.model" size="default" />
                    </el-form-item>
                    <el-form-item prop="application" label="应用">
                        <el-input v-model="ruleFormAdd.application" size="default" />
                    </el-form-item>
                    <el-form-item prop="characteristic" label="特点">
                        <el-input v-model="ruleFormAdd.characteristic" size="default" />
                    </el-form-item>
                    <el-form-item prop="life" label="寿命">
                        <el-input v-model="ruleFormAdd.life" size="default" />
                    </el-form-item>
                    <el-form-item prop="loads" label="负载">
                        <el-input v-model="ruleFormAdd.loads" size="default" />
                    </el-form-item>
                    <el-form-item prop="section" label="节数">
                        <el-input v-model="ruleFormAdd.section" size="default" />
                    </el-form-item>
                    <el-form-item prop="material" label="材料">
                        <el-input v-model="ruleFormAdd.material" size="default" />
                    </el-form-item>
                    <el-form-item prop="size" label="厚度">
                        <el-input v-model="ruleFormAdd.size" size="default" />
                    </el-form-item>
                    <el-form-item prop="specifications" label="规格">
                        <el-input v-model="ruleFormAdd.specifications" size="default" />
                    </el-form-item>
                </el-form>
  
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="danger" @click="clearFormAdd(ruleFormRefAdd)">重置</el-button>
                        <el-button type="primary" @click="submitFormAdd(ruleFormRefAdd)">
                            添加
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
  
  
    <el-row>
        <el-col>
            <el-dialog v-model="dialogdDeleteVisible" title="删除信息" width="50%">
                <span>确定删除吗？</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogdDeleteVisible = false">取消</el-button>
                        <el-button type="primary" @click="deleteMessage()">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
  
    <el-row>
        <el-col>
            <el-dialog v-model="dialogdImageAddVisible" title="上传图片" width="50%">
              <el-upload
      ref="uploadRefAdd"
      class="upload-demo"
      drag
      multiple
      :auto-upload="false"
      :on-exceed="handleExceedAdd"
      :limit="1"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖动文件到这里 或 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png 文件且小于 500kb
        </div>
      </template>
    </el-upload>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogdDeleteVisible = false">取消</el-button>
                        <el-button type="primary" @click=" submitUpload">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
    <el-row>
        <el-col>
            <el-dialog v-model="dialogImageEditVisible" title="修改图片" width="50%">
              <el-upload
      ref="uploadRefEdit"
      class="upload-demo"
      drag
      multiple
      :auto-upload="false"
      :on-exceed="handleExceedEdit"
      :limit="1"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖动文件到这里 或 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png 文件且小于 500kb
        </div>
      </template>
    </el-upload>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogImageEditVisible = false">取消</el-button>
                        <el-button type="primary" @click="submitUpload1">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
    <el-row>
        <el-col>
            <el-dialog v-model="dialogdImageDeleteVisible" title="删除图片" width="50%">
                <span>确定删除吗？</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogdDeleteVisible = false">取消</el-button>
                        <el-button type="primary" @click="dialogdImageDeleteVisible = false">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
  
  </template>
              
  <script lang="ts" setup>
  import { onMounted, onUpdated, onUnmounted } from 'vue'
  import { computed, ref, reactive } from 'vue'
  import { UploadFilled } from '@element-plus/icons-vue'
  import { genFileId } from 'element-plus'
  import type { UploadInstance, UploadProps, UploadRawFile,FormInstance, FormRules } from 'element-plus'
  import { toRaw } from '@vue/reactivity'
  import * as apiSlide from '../../api/sildeControllers'
  import { ElMessage } from 'element-plus'
  import store from '../../store'
  const uploadRefAdd = ref<UploadInstance>()
  const uploadRefEdit = ref<UploadInstance>()
  
  interface hinge {
    application: string,
    characteristic: string,
    life: string,
    loads: string,
    id: string,
    material: string,
    model: string,
    section: string,
    name: string,
    size: string,
    specifications: string,
    url: string
  }
  let selectId=ref("")
  const dialogEditVisible = ref(false)
  const dialogdDeleteVisible = ref(false)
  const dialogdAddVisible = ref(false)
  const dialogImageEditVisible = ref(false)
  const dialogdImageDeleteVisible = ref(false)
  const dialogdImageAddVisible = ref(false)
  const search = ref('')
  const filterTableData = computed(() =>
  tableData.filter(
      (data) =>
          !search.value ||
          data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

  onMounted(() => {
    store.dispatch('allSlide')      
})




  const deleteMessage=()=>{
    apiSlide.apiDelete(selectId.value).then((res)=>{
        if(res.data.code=="50002")
        {
            ElMessage({
            message: '删除成功!',
            type: 'success',
            })
        }
        else{
            ElMessage({
            message: res.data.message,
            type: 'error',
            })
        }
    })
    dialogdDeleteVisible.value = false
}




  const handleEdit = (index: number, row: hinge) => {
    const list = toRaw(row)
    selectId.value=list['id']
    dialogEditVisible.value = true;
  }
  const handleDelete = (index: number, row: hinge) => {
    const list = toRaw(row)
    selectId.value=list['id']
    dialogdDeleteVisible.value=true;
  }
  
  const handleImageEdit = (index: number, row: hinge) => {
    const list = toRaw(row)
    selectId.value=list['url']
    dialogImageEditVisible.value = true;
  }
  const handleImageAdd = (index: number, row: hinge) => {
    const list = toRaw(row)
    selectId.value=list['url']
    dialogdImageAddVisible.value = true;
  }
  const handleImageDel = (index: number, row: hinge) => {
    const list = toRaw(row)
    selectId.value=list['url']
    dialogdImageDeleteVisible.value = true;
  }
  
  
  const handleExceedAdd: UploadProps['onExceed'] = (files) => {
    uploadRefAdd.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRefAdd.value!.handleStart(file)
  }
  
  const handleExceedEdit: UploadProps['onExceed'] = (files) => {
    uploadRefEdit.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRefEdit.value!.handleStart(file)
  }
  
  const submitUpload = () => {
  dialogdImageAddVisible.value=false;
    uploadRefAdd.value!.submit()
  }
  
  const submitUpload1 = () => {
  dialogImageEditVisible.value=false;
    uploadRefEdit.value!.submit()
  }
  
  
  const formSize = ref('default')
  const ruleFormRefEdit = ref<FormInstance>()
  const ruleFormEdit = reactive({
    application: '',
    characteristic: '',
    life: '',
    loads: '',
    id: '',
    material: '',
    model: '',
    section: '',
    name: '',
    size: '',
    specifications: '',
  })
  const rulesEdit = reactive<FormRules>({
    application: [
        { required: true, message: '输入应用', trigger: 'blur' },
    ],
    characteristic: [
        { required: true, message: '输入特点', trigger: 'blur' },
    ],
    life: [
        { required: true, message: '输入寿命', trigger: 'blur' },
    ],
    loads: [
        { required: true, message: '输入负载', trigger: 'blur' },
    ],
    material: [
        { required: true, message: '输入材料', trigger: 'blur' },
    ],
    model: [
        { required: true, message: '输入型号', trigger: 'blur' },
    ],
    name: [
        { required: true, message: '输入名字', trigger: 'blur' },
    ],
    section: [
        { required: true, message: '输入节数', trigger: 'blur' },
    ],
    size: [
        { required: true, message: '输入厚度', trigger: 'blur' },
    ],
    specifications: [
        { required: true, message: '输入规格', trigger: 'blur' },
    ],
  })
  
  const submitFormEdit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            
           apiSlide.apiUpdateSlide(ruleFormEdit.application,
           ruleFormEdit.characteristic,
           selectId.value,
           ruleFormEdit.life,
           ruleFormEdit.loads,
           ruleFormEdit.material,
           ruleFormEdit.model,
           ruleFormEdit.name,
           ruleFormEdit.section,
           ruleFormEdit.size,
           ruleFormEdit.specifications).then((res)=>{
                if(res.data.code=="20000")
                {
                    ElMessage({
                    message: '修改成功!',
                    type: 'success',
                    })
                    dialogEditVisible.value=false;
                }
                else{
                    ElMessage({
                    message: res.data.message,
                    type: 'error',
                    })
                    dialogEditVisible.value=false;
                }
           })


        } else {
  
        }
    })
  }
  
  const clearFormEdit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  
  const ruleFormRefAdd = ref<FormInstance>()
  const ruleFormAdd = reactive({
    application: '',
    characteristic: '',
    life: '',
    loads: '',
    id: '',
    material: '',
    model: '',
    section: '',
    name: '',
    size: '',
    specifications: '',
  
  })
  const rulesAdd = reactive<FormRules>({
    application: [
        { required: true, message: '输入应用', trigger: 'blur' },
    ],
    characteristic: [
        { required: true, message: '输入特点', trigger: 'blur' },
    ],
    life: [
        { required: true, message: '输入寿命', trigger: 'blur' },
    ],
    loads: [
        { required: true, message: '输入负载', trigger: 'blur' },
    ],
    material: [
        { required: true, message: '输入材料', trigger: 'blur' },
    ],
    model: [
        { required: true, message: '输入型号', trigger: 'blur' },
    ],
    name: [
        { required: true, message: '输入名字', trigger: 'blur' },
    ],
    section: [
        { required: true, message: '输入节数', trigger: 'blur' },
    ],
    size: [
        { required: true, message: '输入厚度', trigger: 'blur' },
    ],
    specifications: [
        { required: true, message: '输入规格', trigger: 'blur' },
    ],
  
  })
  
  const submitFormAdd = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            apiSlide.apiInsertSlide(ruleFormAdd.application,
            ruleFormAdd.characteristic,
            ruleFormAdd.id,ruleFormAdd.life,
            ruleFormAdd.loads,ruleFormAdd.material,
            ruleFormAdd.model,ruleFormAdd.name,
            ruleFormAdd.section,
            ruleFormAdd.size,
            ruleFormAdd.specifications).then((res)=>{
                if(res.data.code=="20000")
                {
                    ElMessage({
                    message: '修改成功!',
                    type: 'success',
                    })
                    dialogdAddVisible.value=false;
                }
                else{
                    ElMessage({
                    message: res.data.message,
                    type: 'error',
                    })
                    dialogdAddVisible.value=false;
                }
            })
        } else {
  
        }
    })
  }
  const clearFormAdd = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  
  const allhinge=computed((store) =>store.state.allSlide)

  let tableData: hinge[] = []
  tableData=store.state.allSlide




  </script>
              
              
  <style scoped>
  .box-card {
    border: none;
  }
  </style>