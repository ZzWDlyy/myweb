<template>
  <div>
    <div id="select">
      请选择要加载的模型：
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div id="upload">
      <el-upload
        class="upload-demo"
        drag
        :disabled="uploadDisabled"
        :action="UploadUrl()"
        multiple
        :before-upload="beforeUpload"
        @click.native.prevent="handleUploadClick"
      >
        <el-icon class="el-icon--upload">
          <upload-filled />
        </el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            nii、nii.gz、mhd、raw、dcm 支持
          </div>
        </template>
      </el-upload>
    </div>
     <el-divider />
      <div>
        <el-text class="mx-1" type="info" >预览：点击V视角切换，点击C添加切片。
          切换到<el-link href="/platform/user" target="_blank" type="primary" >预测展示平台</el-link></el-text>
      </div>
    <div>
      <canvas id="gl" height="390" width="730"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref, computed ,onMounted} from "vue";
import type { UploadInstance } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { Niivue, NVMesh, NVImage } from '@niivue/niivue';

const volumeList = ref([
  {
    url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz",
  }
])

const nv = new Niivue({ crosshairColor: [0,1,0,0.5], textHeight: 0.1 })
// https://niivue.github.io/niivue-demo-images/mni152.nii.gz


onMounted(() => {
  nv.attachTo('gl')
  nv.loadVolumes(volumeList.value)
})

const uploadRef = ref<UploadInstance>();


const submitUpload = () => {
  uploadRef.value!.submit();
};
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];

const uploadDisabled = computed(() => {
  return !value.value;
});

const handleUploadClick = () => {
  if (uploadDisabled.value) {
    ElMessage.warning("请选择加载模型");
  }
};

const beforeUpload = (file, fileList) => {
  file.model = value.value;
  return true;
};
function up(){
  nv.addVolumeFromUrl({url:'/2.nii.gz'})
}

function uploadFile(file) {
      let formData = new FormData();
      formData.append('file', file.file);

      return axios({
        url: 'https://example.com/upload',
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        // Handle response
        console.log(response)
      }).catch(error => {
        // Handle error
        console.log(error)
      });
    }
    function UploadUrl(){
        return "返回需要上传的地址";     
    } 
</script>

<style scoped>
  #select {
    padding: 10px;
  }
  #upload {
    padding-left: 10px;
    padding-right: 500px;
  }
  #tiaozhuan{
    margin-left: 200px;
  }
</style>
