<template>
  <el-card class="box-card">
    <template #header>

        <h3>铰链信息</h3>
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
      <el-table-column label="名称" prop="name" />
      <el-table-column label="型号" prop="model" />
      <el-table-column label="铰杯安装" prop="hingeCupInstallation" />
      <el-table-column label="门板/门框材质" prop="installationMaterial" />
      <el-table-column label="安装方式" prop="installationMethod" />
      <el-table-column label="关闭系统" prop="shutDownSystem" />
      <el-table-column label="阻尼系统" prop="dampingSystem" />
      <el-table-column label="开启角度" prop="openingAngle" />
      <el-table-column label="大角度铰链" prop="largeAngleHinge" />
      <el-table-column label="门板调节" prop="doorPanelAdjustment" />
      <el-table-column label="铰链底座" prop="hingeBase" />
      <el-table-column label="可選設備" prop="optionalEquipment" />
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
              <el-button size="default"  @click="handleImageAdd">上传图片</el-button>
              <el-button size="default"  @click="handleImageEdit">修改图片</el-button>
              <el-button size="default"  @click="handleImageDel">删除图片</el-button>
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
                  <el-form-item prop="hingeCupInstallation" label="铰杯安装">
                      <el-input v-model="ruleFormEdit.hingeCupInstallation" size="default" />
                  </el-form-item>
                  <el-form-item prop="installationMaterial" label="门板/门框材质">
                      <el-input v-model="ruleFormEdit.installationMaterial" size="default" />
                  </el-form-item>
                  <el-form-item prop="installationMethod" label="安装方式">
                      <el-input v-model="ruleFormEdit.installationMethod" size="default" />
                  </el-form-item>
                  <el-form-item prop="shutDownSystem" label="关闭系统">
                      <el-input v-model="ruleFormEdit.shutDownSystem" size="default" />
                  </el-form-item>
                  <el-form-item prop="dampingSystem" label="阻尼系统">
                      <el-input v-model="ruleFormEdit.dampingSystem" size="default" />
                  </el-form-item>
                  <el-form-item prop="openingAngle" label="开启角度">
                      <el-input v-model="ruleFormEdit.openingAngle" size="default" />
                  </el-form-item>
                  <el-form-item prop="largeAngleHinge" label="大角度铰链">
                      <el-input v-model="ruleFormEdit.largeAngleHinge" size="default" />
                  </el-form-item>
                  <el-form-item prop="doorPanelAdjustment" label="门板调节">
                      <el-input v-model="ruleFormEdit.doorPanelAdjustment" size="default" />
                  </el-form-item>
                  <el-form-item prop="hingeBase" label="铰链底座">
                      <el-input v-model="ruleFormEdit.hingeBase" size="default" />
                  </el-form-item>
                  <el-form-item prop="optionalEquipment" label="可選設備">
                      <el-input v-model="ruleFormEdit.optionalEquipment" size="default" />
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
                  <el-form-item prop="hingeCupInstallation" label="铰杯安装">
                      <el-input v-model="ruleFormAdd.hingeCupInstallation" size="default" />
                  </el-form-item>
                  <el-form-item prop="installationMaterial" label="门板/门框材质">
                      <el-input v-model="ruleFormAdd.installationMaterial" size="default" />
                  </el-form-item>
                  <el-form-item prop="installationMethod" label="安装方式">
                      <el-input v-model="ruleFormAdd.installationMethod" size="default" />
                  </el-form-item>
                  <el-form-item prop="shutDownSystem" label="关闭系统">
                      <el-input v-model="ruleFormAdd.shutDownSystem" size="default" />
                  </el-form-item>
                  <el-form-item prop="dampingSystem" label="阻尼系统">
                      <el-input v-model="ruleFormAdd.dampingSystem" size="default" />
                  </el-form-item>
                  <el-form-item prop="openingAngle" label="开启角度">
                      <el-input v-model="ruleFormAdd.openingAngle" size="default" />
                  </el-form-item>
                  <el-form-item prop="largeAngleHinge" label="大角度铰链">
                      <el-input v-model="ruleFormAdd.largeAngleHinge" size="default" />
                  </el-form-item>
                  <el-form-item prop="doorPanelAdjustment" label="门板调节">
                      <el-input v-model="ruleFormAdd.doorPanelAdjustment" size="default" />
                  </el-form-item>
                  <el-form-item prop="hingeBase" label="铰链底座">
                      <el-input v-model="ruleFormAdd.hingeBase" size="default" />
                  </el-form-item>
                  <el-form-item prop="optionalEquipment" label="可選設備">
                      <el-input v-model="ruleFormAdd.optionalEquipment" size="default" />
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
import { computed, ref, reactive } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile,FormInstance, FormRules } from 'element-plus'
import * as apiHinge from '../../api/hingeControllers'
import { toRaw } from '@vue/reactivity'
import { ElMessage } from 'element-plus'
const uploadRefAdd = ref<UploadInstance>()
const uploadRefEdit = ref<UploadInstance>()

interface hinge {
  dampingSystem: string,
  doorPanelAdjustment: string,
  hingeBase: string,
  hingeCupInstallation: string,
  id: string,
  installationMaterial: string,
  installationMethod: string,
  largeAngleHinge: string,
  model: string,
  name: string,
  openingAngle: string,
  optionalEquipment: string,
  shutDownSystem: string,
  url: string
}
const selectId=ref("")
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


const deleteMessage=()=>{
    apiHinge.apiDropHinge(selectId.value).then((res)=>{
        if(res.data.code=="20000")
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
}

const handleEdit = (index: number, row: hinge) => {
    const list = toRaw(row)
selectId.value=list['id']
  dialogEditVisible.value = true;
}
const handleDelete = (index: number, row: hinge) => {
    const list = toRaw(row)
selectId.value=list['id']
  dialogdDeleteVisible.value = true;
}

const handleImageEdit = (index: number, row: hinge) => {
  dialogImageEditVisible.value = true;
}
const handleImageAdd = (index: number, row: hinge) => {
  dialogdImageAddVisible.value = true;
}
const handleImageDel = (index: number, row: hinge) => {
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
  name: '',
  model: '',
  hingeCupInstallation: '',
  installationMaterial: '',
  installationMethod: '',
  shutDownSystem: '',
  dampingSystem: '',
  openingAngle: '',
  largeAngleHinge: '',
  doorPanelAdjustment: '',
  hingeBase: '',
  optionalEquipment: '',
})
const rulesEdit = reactive<FormRules>({
  name: [
      { required: true, message: '输入名称', trigger: 'blur' },
  ],
  model: [
      { required: true, message: '输入型号', trigger: 'blur' },
  ],
  hingeCupInstallation: [
      { required: true, message: '输入铰杯安装', trigger: 'blur' },
  ],
  installationMaterial: [
      { required: true, message: '输入门板/门框材质', trigger: 'blur' },
  ],
  installationMethod: [
      { required: true, message: '输入安装方式', trigger: 'blur' },
  ],
  shutDownSystem: [
      { required: true, message: '输入关闭系统', trigger: 'blur' },
  ],
  dampingSystem: [
      { required: true, message: '输入阻尼系统', trigger: 'blur' },
  ],
  openingAngle: [
      { required: true, message: '输入开启角度', trigger: 'blur' },
  ],
  largeAngleHinge: [
      { required: true, message: '输入大角度铰链', trigger: 'blur' },
  ],
  doorPanelAdjustment: [
      { required: true, message: '输入门板调节', trigger: 'blur' },
  ],
  hingeBase: [
      { required: true, message: '输入铰链底座', trigger: 'blur' },
  ],
  optionalEquipment: [
      { required: true, message: '输入可選設備', trigger: 'blur' },
  ],
})

const submitFormEdit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
      if (valid) {
        apiHinge.apiupdateHinge(
        ruleFormEdit.dampingSystem,
        ruleFormEdit.doorPanelAdjustment,
        ruleFormEdit.hingeBase,
        ruleFormEdit.hingeCupInstallation,
        selectId.value,
        ruleFormEdit.installationMaterial,
        ruleFormEdit.installationMethod,
        ruleFormEdit.largeAngleHinge,
        ruleFormEdit.model,
        ruleFormEdit.name,
        ruleFormEdit.openingAngle,
        ruleFormEdit.optionalEquipment,
        ruleFormEdit.shutDownSystem).then((res)=>{
            if(res.data.code=="20000")
        {
            ElMessage({
            message: '修改成功!',
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
  name: '',
  model: '',
  hingeCupInstallation: '',
  installationMaterial: '',
  installationMethod: '',
  shutDownSystem: '',
  dampingSystem: '',
  openingAngle: '',
  largeAngleHinge: '',
  doorPanelAdjustment: '',
  hingeBase: '',
  optionalEquipment: '',

})
const rulesAdd = reactive<FormRules>({
  name: [
      { required: true, message: '输入名称', trigger: 'blur' },
  ],
  model: [
      { required: true, message: '输入型号', trigger: 'blur' },
  ],
  hingeCupInstallation: [
      { required: true, message: '输入铰杯安装', trigger: 'blur' },
  ],
  installationMaterial: [
      { required: true, message: '输入门板/门框材质', trigger: 'blur' },
  ],
  installationMethod: [
      { required: true, message: '输入安装方式', trigger: 'blur' },
  ],
  shutDownSystem: [
      { required: true, message: '输入关闭系统', trigger: 'blur' },
  ],
  dampingSystem: [
      { required: true, message: '输入阻尼系统', trigger: 'blur' },
  ],
  openingAngle: [
      { required: true, message: '输入开启角度', trigger: 'blur' },
  ],
  largeAngleHinge: [
      { required: true, message: '输入大角度铰链', trigger: 'blur' },
  ],
  doorPanelAdjustment: [
      { required: true, message: '输入门板调节', trigger: 'blur' },
  ],
  hingeBase: [
      { required: true, message: '输入铰链底座', trigger: 'blur' },
  ],
  optionalEquipment: [
      { required: true, message: '输入可選設備', trigger: 'blur' },
  ],

})

const submitFormAdd = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
      if (valid) {
        apiHinge.apiAddHinge(ruleFormAdd.dampingSystem,
        ruleFormAdd.doorPanelAdjustment,
        ruleFormAdd.hingeBase,
        ruleFormAdd.hingeCupInstallation,
        "434",
        ruleFormAdd.installationMaterial,
        ruleFormAdd.installationMethod,
        ruleFormAdd.largeAngleHinge,
        ruleFormAdd.model,
        ruleFormAdd.name,
        ruleFormAdd.openingAngle,
        ruleFormAdd.optionalEquipment,
        ruleFormAdd.shutDownSystem).then((res)=>{
            if(res.data.code=="20000")
                {
                    ElMessage({
                    message: '添加成功!',
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
                dialogdAddVisible.value=false;
        })

      } else {

      }
  })
}
const clearFormAdd = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const tableData: hinge[] = [
    {
  dampingSystem: '1',
  doorPanelAdjustment: '1',
  hingeBase: '1',
  hingeCupInstallation: '1',
  id: '1',
  installationMaterial: '1',
  installationMethod: '1',
  largeAngleHinge: '1',
  model: '1',
  name: '1',
  openingAngle: '1',
  optionalEquipment: '1',
  shutDownSystem: '1',
  url: '1'
    },
  ]


</script>
            
            
<style scoped>
.box-card {
  border: none;
}
</style>