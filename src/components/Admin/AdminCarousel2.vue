<template>
    <el-card class="box-card">
        <template #header>
            <h3>幻灯片2</h3>
        </template>
        <el-row>
            <el-col :span="8" style="display: flex;justify-content: left;">
                <el-button size="large" @click="dialogdAddVisible = true">添加</el-button>
            </el-col>

            <el-col :span="8">

            </el-col>

            <el-col :span="8">
                <el-input v-model="search" size="large" placeholder="搜索" />
            </el-col>

        </el-row>

    </el-card>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="url" prop="url" />
        <el-table-column fixed="right" width="230">
            <template #header>
                <span style="text-align: center;">
                    操作
                </span>
            </template>
            <template #default="scope">
                <el-button size="default" @click="handleView(scope.$index, scope.row)">查看</el-button>
                <el-button size="default" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                <el-button size="default" type="danger" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-row>
        <el-col>

            <el-dialog v-model="dialogEditVisible" title="修改" style="min-width:80%">

                <el-upload class="upload-demo" drag multiple ref="Upload" :limit="1" :on-exceed="HandleExceed"
                    :http-request="file">
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        拖动文件到这或者 <em>点击上传</em>
                    </div>
                    <template #tip>
                        <div class="el-upload__tip">
                            jpg/png 文件小于500kb
                        </div>
                    </template>
                </el-upload>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="danger" @click="closeUpdateImage()">取消</el-button>
                        <el-button type="primary" @click="updateImage()">
                            修改
                        </el-button>
                    </span>
                </template>

            </el-dialog>
        </el-col>
    </el-row>


    <el-row>
        <el-col>

            <el-dialog v-model="dialogdViewVisible" title="查看" style="min-width:80%">
                <el-image style="width: 700px; height: 400px"
                    :src="selecturl" />


                <template #footer>

                </template>
            </el-dialog>
        </el-col>
    </el-row>


    <el-row>
        <el-col>
            <el-dialog v-model="dialogdAddVisible" title="添加" style="min-width:80%">

                <el-upload class="upload-demo" drag multiple ref="Upload" :limit="1" :on-exceed="HandleExceed"
                    :http-request="file">
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        拖动文件到这或者 <em>点击上传</em>
                    </div>
                    <template #tip>
                        <div class="el-upload__tip">
                            jpg/png 文件小于500kb
                        </div>
                    </template>
                </el-upload>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="danger" @click="closeAddImage()">取消</el-button>
                        <el-button type="primary" @click="addImage()">
                            添加
                        </el-button>
                    </span>
                </template>

            </el-dialog>
        </el-col>
    </el-row>



    <el-row>
        <el-col>
            <el-dialog v-model="dialogdDeleteVisible" title="确定删除" width="50%">
                <span>确定删除吗？</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogdDeleteVisible = false">取消</el-button>
                        <el-button type="primary" @click="deleteImage()">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
</template>
              
<script lang="ts" setup>
import { genFileId } from 'element-plus'
import { computed, ref } from 'vue'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import * as apiCorporation from '../../api/corporationControllers'
import store from '../../store/index'
import { toRaw } from '@vue/reactivity'
interface hinge {
    url: string,
}

const url=ref('')
const selecturl=ref('')
const dialogEditVisible = ref(false)
const dialogdDeleteVisible = ref(false)
const dialogdAddVisible = ref(false)
const dialogdViewVisible = ref(false)
const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.url.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: hinge) => {
    const list = toRaw(row)
    selecturl.value = list['url']
    dialogEditVisible.value = true;
}
const handleDelete = (index: number, row: hinge) => {
    const list = toRaw(row)
    selecturl.value = list['url']
    dialogdDeleteVisible.value = true;
}
const handleView = (index: number, row: hinge) => {
    const list = toRaw(row)
    selecturl.value = list['url']
    dialogdViewVisible.value = true;
}


const Upload = ref<UploadInstance>()

const HandleExceed: UploadProps['onExceed'] = (files) => {
    Upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    Upload.value!.handleStart(file)
}

let fileimage: any = new FormData()

const file = (param: any) => {
    fileimage.set('img', param.file)
}

const showImage = () => {
    dialogdViewVisible.value = false
}



const addImage = () => {
    Upload.value!.submit()
    apiCorporation.apiPutImg2(fileimage).then((res)=>{
        if(res.data.code=='20000')
        {
            ElMessage({
            message: '上传成功!',
            type: 'success',
            })
        }
        else{
            ElMessage({
            message: '上传失败!',
            type: 'error',
            })
        }
    })
    dialogdAddVisible.value = false
}

const closeAddImage = () => {
    Upload.value!.clearFiles()

}

const updateImage = () => {
    Upload.value!.submit()
    apiCorporation.apiUpdateImg1(fileimage,selecturl.value).then((res)=>{
        if(res.data.code=='20000')
        {
            ElMessage({
            message: '修改成功!',
            type: 'success',
            })
        }
        else{
            ElMessage({
            message: '修改失败!',
            type: 'error',
            })
        }
    })
    dialogEditVisible.value = false;
}

const closeUpdateImage = () => {
    Upload.value!.clearFiles()
    dialogEditVisible.value = false;
}

const deleteImage = () => {
    apiCorporation.apiDelImg2(selecturl.value).then((res)=>{
        if(res.data.code=='20000')
        {
            ElMessage({
            message: '删除成功!',
            type: 'success',
            })
            for(let i=0;i<tableData.length;i++)
            {
                const list = toRaw(tableData[i])
                if (list['url'] == selecturl.value) {
                    tableData.splice(i, 1);
                }
            }
        }
        else{
            ElMessage({
            message: '删除失败!',
            type: 'error',
            })
        }
    })
    dialogdDeleteVisible.value = false;
}




let tableData: hinge[] = []


store.state.allCarousel2.forEach(element => {
    tableData.push({url:element})
});
</script>
              
              
<style scoped>
.box-card {
    border: none;
}
</style>