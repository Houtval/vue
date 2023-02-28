<template>
<el-upload
    ref="uploadRef"
    class="upload-demo"
    drag
    multiple
    :auto-upload="false"
    :on-exceed="handleExceed"
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
  <el-button class="ml-3" type="success" @click="submitUpload">
     上传到服务器
    </el-button>
</template>
     
<script lang="ts" setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
const uploadRef = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  uploadRef.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadRef.value!.handleStart(file)
}

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
     
     
<style scoped>

</style>