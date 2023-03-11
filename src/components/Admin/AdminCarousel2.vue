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
        <el-table-column label="Id" prop="id" />
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
                <el-image style="width: 100px; height: 100px"
                    :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" />


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
                        <el-button type="primary" @click="dialogdDeleteVisible = false">
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
interface hinge {
    name: string,
}

const dialogEditVisible = ref(false)
const dialogdDeleteVisible = ref(false)
const dialogdAddVisible = ref(false)
const dialogdViewVisible = ref(false)
const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: hinge) => {
    dialogEditVisible.value = true;
}
const handleDelete = (index: number, row: hinge) => {
    dialogdDeleteVisible.value = true;
}
const handleView = (index: number, row: hinge) => {
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
    fileimage.set('file', param.file)
}

const showImage = () => {
    dialogdViewVisible.value = false
}



const addImage = () => {
    Upload.value!.submit()
    dialogdAddVisible.value = false
}

const closeAddImage = () => {
    Upload.value!.clearFiles()

}

const updateImage = () => {
    dialogEditVisible.value = false;
}

const closeUpdateImage = () => {
    dialogEditVisible.value = false;
}

const deleteImage = () => {
    dialogdDeleteVisible.value = false;
}




const tableData: hinge[] = [
    {
        name: "string",
    },
]
</script>
              
              
<style scoped>
.box-card {
    border: none;
}
</style>