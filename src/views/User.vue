<template>
  <el-container>
    <el-main>
      <!-- 主要内容区域 -->
      <canvas id="gl" width="480" height="640" ref="myCanvas" v-show="showCanvas"></canvas>
      <button @click="clearCanvas">清空</button>
      <el-dialog
        v-model="dialogVisible1"
        title="已加载文件"
        width="30%"
        :before-close="handleClose"
      >
        <el-radio-group v-model="selectedFile">
          <el-radio-button
            v-for="(file, index) in fileList"
            :key="index"
            :label="file.name"
          >
            {{ file.name }}
          </el-radio-button>
        </el-radio-group>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible1 = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible1 = false;load()">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-main>

    <!-- 折叠按钮 -->
    <el-button @click="isCollapse = !isCollapse;resize()" class="collapse-button">
      {{ isCollapse ? "<<" : ">>" }}
      工具栏
    </el-button>
    <el-aside :width="isCollapse ? '0px' : '360px'">
      <!-- 模式选择 -->
      <el-switch
        active-text="drawing模式"
        inactive-text="voxel模式"
        v-model="value2"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        @change="modelChange"
      />
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="基础渲染设置" name="1">
            <div>
              <div>
                <div>
                  <el-switch
                    v-model="value1"
                    active-text="3D十字准线"
                    @change="setCorsshair()"
                  />
                </div>
                <div>
                  <el-switch
                    v-model="value3"
                    active-text="颜色条"
                    @change="setColorbar()"
                  />
                </div>
                <div>
                  <el-switch
                    v-model="value5"
                    active-text="方向块"
                    @change="setCube()"
                  />
                </div>
              </div>
              <el-divider />
              <div>
                <el-text class="mx-1" type="primary">Drag模式：</el-text>
                <el-select
                  v-model="Dragvalue"
                  placeholder="Select"
                  @change="setDragMode()"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  />
                </el-select>
              </div>
              <el-divider />
              <div class="slider-demo-block">
                <span class="demonstration"
                  ><el-text class="mx-1" type="primary"
                    >伽马值设置：</el-text
                  ></span
                >
                <el-slider
                  v-model="value4"
                  :format-tooltip="formatTooltip"
                  @change="changeGama()"
                />
              </div>
            </div>
            <div></div>
          </el-collapse-item>
          <el-collapse-item title="视角与切片" name="2">
            <div>
              <el-text class="mx-1" type="primary">视角切换：</el-text>
              <el-select
                v-model="Viewvalue"
                placeholder="Select"
                @change="setViewMode()"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>
            </div>
            <el-divider />
            <div>
              <el-text class="mx-1" type="primary">切片切换：</el-text>
              <el-select
                v-model="Planevalue"
                placeholder="Select"
                @change="setPlaneMode()"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>
            </div>
          </el-collapse-item>
          <el-collapse-item title="颜色管理" name="3">
            <div>
              <el-text class="mx-1" type="primary">页面背景色：</el-text>
              <el-color-picker v-model="backcolor" show-alpha />
            </div>
            <el-divider />
            <div>
              <el-text class="mx-1" type="primary"
                >切片颜色（drawing模式）：</el-text
              >
              <el-color-picker
                v-model="clipcolor"
                :disabled="disabledValue"
                show-alpha
              />
            </div>
            <el-divider />
            <div>
              <el-text class="mx-1" type="primary">颜色映射表：</el-text>
              <el-select
                v-model="colormap"
                placeholder="Select"
                @change="changeColormap()"
              >
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="标签管理（drawing模式） "
            :disabled="disabledValue"
            name="4"
          >
            <el-button type="primary" plain @click="addTag"
              ><el-icon><Plus /></el-icon
            ></el-button>
            <el-button
              :class="{ 'is-active': activeButton === 'btn1' }"
              @click="
                activeButton = 'btn1';
                handlePenChange();
              "
            >
              <el-icon><Pointer /></el-icon>
            </el-button>
            <el-button
              :class="{ 'is-active': activeButton === 'btn2' }"
              @click="
                activeButton = 'btn2';
                handlePenChange();
              "
            >
              <el-icon><EditPen /></el-icon>
            </el-button>
            <el-button
              :class="{ 'is-active': activeButton === 'btn3' }"
              @click="
                activeButton = 'btn3';
                handlePenChange();
              "
            >
              <el-icon><BrushFilled /></el-icon>
            </el-button>
            <el-button
              :class="{ 'is-active': activeButton === 'btn4' }"
              @click="
                activeButton = 'btn4';
                handlePenChange();
              "
            >
              <el-icon><Back /></el-icon>
            </el-button>
            <el-button
              :class="{ 'is-active': activeButton === 'btn5' }"
              @click="
                activeButton = 'btn5';
                handlePenChange();
              "
            >
              <el-icon><DocumentAdd /></el-icon>
            </el-button>
            <div>
              <!-- 编辑对话框 -->
              <el-dialog
                v-model="centerDialogVisible"
                title="标签编辑"
                width="30%"
                align-center
              >
                标签：
                <el-input v-model="input" placeholder="重命名标签" />
                选择颜色：
                <el-color-picker v-model="tag_color" />
                <template #footer #default="scope">
                  <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false"
                      >Cancel</el-button
                    >
                    <el-button
                      type="primary"
                      @click="
                        centerDialogVisible = false;
                        Edit();
                      "
                    >
                      Confirm
                    </el-button>
                  </span>
                </template>
              </el-dialog>
            </div>
            <div>
              <el-table
                ref="tableRef"
                row-key="date"
                :data="tableData"
                style="width: 80"
              >
                <el-table-column prop="label" label="label" width="80" />
                <el-table-column
                  prop="tag"
                  label="Tag"
                  width="100"
                  filter-placement="bottom-end"
                >
                  <template #default="scope">
                    <el-tag
                      :type="scope.row.tag === 'Home' ? '' : 'success'"
                      :color="scope.row.color"
                      disable-transitions
                      @click="handlePenColor(scope.$index, scope.row)"
                    ></el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="Operations" width="180">
                  <template #default="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row)"
                      >编辑</el-button
                    >

                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-collapse-item>
          <el-collapse-item title="文件管理" name="5">
            <div>
              <el-button text @click="openDialog"> 加载已处理文件 </el-button>
              <!-- <form @submit.prevent="submitForm" class="dropzone">
                <input type="file" name="image" @change="onFileChange" />
                <button type="submit">Upload</button>
              </form> -->
            </div>
            <div>
              <el-button text @click="saveFile"> 保存标签文件 </el-button>
            </div>
            <div>
              <el-button text @click="saveImage"> 截图保存 </el-button>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { Niivue, NVController, nvImage } from "@niivue/niivue";
import {
  ref,
  onMounted,
  watchEffect,
  watch,
  computed,
  defineExpose,
} from "vue";
import slicer3d from "../../node_modules/@niivue/niivue/src/cmaps/_slicer3d.json";
import type { TableColumnCtx, TableInstance } from "element-plus";
import { table } from "console";
const nv = new Niivue({
  logging: true,
  dragAndDropEnabled: true, //初始状态
});
nv.graph.autoSizeMultiplanar = true;
let file = ref(null);

//加载选择的文件
let fileList = ref([
  { "name": "1.nii"},
  { "name": "2.nii.gz"},
  { "name": "save.nii" },
  { "name": "11"}
]); // 从服务器获取文件列表，并赋值给这个变量
let selectedFile = ref(""); // 存储用户选择的文件
const dialogVisible1 = ref(false);
async function openDialog() {
  // dialogVisible1.value = true;
  // const response = await fetch("http://your-server-url/files"); // 替换为你的服务器 URL
  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }
  // fileList.value = await response.json(); // 假设服务器返回的是 JSON 数据
  console.log(fileList.value);
  
}

const myCanvas = ref(null)
const activeButton = ref("btn1");
const isCollapse = ref(false);
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(60);
const value5 = ref(false);
const url = ref("/1.nii");
const formatTooltip = (val: number) => {
  return val / 100;
};
const Dragvalue = ref("none");
const backcolor = ref("rgba(242, 241, 241, 1)");
const clipcolor = ref("rgba(242, 241, 241, 1)");
const disabledValue = computed(() => !value2.value);
const colormap = ref("gray");

const tags = ref([]);
const newTag = ref({ name: "", color: "#000000" });
const penColor = ref(0);

const input = ref("");
const tag_color = ref("");

const centerDialogVisible = ref(false);

const options = [
  {
    value: 0,
    label: "none",
  },
  {
    value: 1,
    label: "对比",
  },
  {
    value: 2,
    label: "测量",
  },
  {
    value: 3,
    label: "移动",
  },
  {
    value: 4,
    label: "缩放",
  },
];
const Viewvalue = ref("多平面");
const options1 = [
  {
    value: nv.sliceTypeAxial,
    label: "Axial",
  },
  {
    value: nv.sliceTypeCoronal,
    label: "Coronal",
  },
  {
    value: nv.sliceTypeSagittal,
    label: "Sagittal",
  },
  {
    value: nv.sliceTypeMultiplanar,
    label: "多平面",
  },
  {
    value: nv.sliceTypeRender,
    label: "3D渲染",
  },
];
const Planevalue = ref("NONE");
const options2 = [
  {
    value: [2, 0, 0],
    label: "NONE",
  },
  {
    value: [0, 270, 0],
    label: "left a 270 e 0",
  },
  {
    value: [0, 90, 0],
    label: "right a 90 e 0",
  },
  {
    value: [0, 0, 0],
    label: "posterior a 0 e 0",
  },
  {
    value: [0, 180, 0],
    label: "anterior a 0 e 0",
  },
  {
    value: [0, 0, -90],
    label: "inferior a 0 e -90",
  },
  {
    value: [0, 0, 90],
    label: "superior: a 0 e 90",
  },
];
nv.addColormap("slicer3d", slicer3d);
const options3 = [
  {
    value: "gray",
    label: "gray",
  },
  {
    value: "blue",
    label: "blue",
  },
  {
    value: "slicer3d",
    label: "slicer3d",
  },
  {
    value: "ROI_i256",
    label: "ROI_i256",
  },
  {
    value: "actc",
    label: "actc",
  },
];
const cmap = ref({
  labels: [
    "背景",
    "脾脏",
    "右肾",
    "左肾",
    "胆囊",
    "食道",
    "肝脏",
    "胃",
    "主动脉",
    "下腔静脉",
    "胰腺",
    "膀胱",
  ],
  R: [0, 255, 128, 255, 0, 64, 128, 192, 0, 128, 64, 192],
  G: [0, 0, 128, 0, 255, 64, 192, 128, 255, 192, 128, 64],
  B: [0, 0, 0, 128, 128, 255, 64, 0, 255, 64, 192, 128],
  A: [0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
});
//表格设置
interface label {
  date: string;
  label: string;
  // address: string
  tag: string;
  color: string;
}

const tableRef = ref<TableInstance>();

const filterTag = (value: string, row: label) => {
  return row.tag === value;
};
const filterHandler = (
  value: string,
  row: label,
  column: TableColumnCtx<label>
) => {
  const property = column["property"];
  return row[property] === value;
};

const tableData = ref(
  cmap.value.labels.map((label, index) => {
    const r = cmap.value.R[index];
    const g = cmap.value.G[index];
    const b = cmap.value.B[index];

    // 将 RGB 颜色值转换为十六进制形式的颜色字符串
    const color =
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

    return {
      label: label,
      tag: "", // 这里需要添加你的逻辑来设置 tag 的值
      color: color,
    };
  })
);

nv.opts.show3Dcrosshair = value1.value;
const volumeList = ref([
  {
    id: "test",
    url: url.value,
    // colorMap:colormap.value
  },
]);
//功能实现
function onFileChange(e) {
  file.value = e.target.files[0];
}
const showCanvas = ref(true); 
//模式切换
function modelChange(){
  // showCanvas.value = !showCanvas.value;
  if (value2.value) {
        nv.opts.dragAndDropEnabled = true;
        nv.loadDrawingFromUrl(url.value);
        nv.setDrawColormap(cmap.value);
      } else {
        nv.drawClearAllUndoBitmaps();
        nv.createEmptyDrawing();
        nv.loadVolumes([{url: url.value}]);
        // nv.setDrawColormap('gary')
        nv.drawScene();
      }
      console.log(nv.volumes.top);
      
}
function load() {
  url.value = '/'+selectedFile.value;
  console.log(url.value);
  if (value2.value) {
    nv.loadVolumes([{url:url.value}]);
    nv.createEmptyDrawing();
    nv.loadDrawingFromUrl(url.value);
    nv.setDrawColormap(cmap.value);
    nv.opts.dragAndDropEnabled = true;
  } else {
    nv.setDrawingEnabled(false);
    console.log(url.value);
    nv.createEmptyDrawing();
    nv.loadVolumes([{url:url.value}]);
  }
  nv.updateGLVolume();
}
//
function handlePenChange() {
  if (activeButton.value == "btn1") {
    nv.setDrawingEnabled(false);
  } else {
    nv.setDrawingEnabled(true);
    if (activeButton.value == "btn2") nv.setPenValue(penColor.value, false);
    else if (activeButton.value == "btn3") nv.setPenValue(penColor.value, true);
    else if(activeButton.value == "btn4")nv.drawUndo();
    else nv.createEmptyDrawing();
  }
}

//伽马值改变
function changeGama() {
  console.log(value4.value / 100);
  nv.setGamma(value4.value / 100);
  nv.updateGLVolume();
}
//十字准线改变
function setCorsshair() {
  // console.log(value1);
  nv.opts.show3Dcrosshair = value1.value;
  nv.updateGLVolume();
}
//颜色条
function setColorbar() {
  nv.opts.isColorbar = value3.value;
  nv.updateGLVolume();
}
//方向块
function setCube() {
  nv.opts.isOrientCube = value5.value;
  nv.updateGLVolume();
}
//Drag模式
function setDragMode() {
  nv.opts.dragMode = Dragvalue.value;
  nv.updateGLVolume();
}
//视角切换
function setViewMode() {
  nv.setSliceType(Viewvalue.value);
  nv.updateGLVolume();
}
//切片切换
function setPlaneMode() {
  nv.setClipPlane(Planevalue.value);
  nv.updateGLVolume();
}
function changeColormap() {
  console.log(colormap.value);
  console.log(nv.volumes[0].id);
  nv.setColorMap(nv.volumes[0].id, colormap.value);
  nv.updateGLVolume();
  nv.drawScene();
}
let maxIndex = ref(12);
const curRow = ref();
const curIndex = ref();
//增加标签
function addTag() {
  tableData.value.push({
    label: "新标签",
    tag: "",
    color: "新颜色",
  });
}

//编辑
const Edit = () => {
  curRow.value.label = input.value;
  curRow.value.color = tag_color.value;
  // 反向解析 color，得到 RGB 值
  console.log(curRow.value.color);
  const color = curRow.value.color.substring(1);
  console.log(color);

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  cmap.value.R[curIndex.value] = r;
  cmap.value.G[curIndex.value] = g;
  cmap.value.B[curIndex.value] = b;
  cmap.value.A[curIndex.value] = 180;
  cmap.value.labels[curIndex.value] = curRow.value.label;
  // cmap.value.R = cmap.value.R.slice(0, 12);
  // cmap.value.G = cmap.value.G.slice(0, 12);
  // cmap.value.B = cmap.value.B.slice(0, 12);
  // cmap.value.A = cmap.value.A.slice(0, 12);
  // 你也可以更新 cmap.A 如果需要
  console.log(cmap);

  nv.setDrawColormap(cmap.value);
  nv.updateGLVolume();
  nv.drawScene();
  console.log(nv);
};

const handlePenColor = (index: number, row: User) => {
  penColor.value = index;
  if (activeButton.value == "btn2") nv.setPenValue(penColor.value, false);
  else if (activeButton.value == "btn3") nv.setPenValue(penColor.value, true);
};

const handleEdit = (index: number, row: User) => {
  centerDialogVisible.value = true;
  curRow.value = row;
  curIndex.value = index;
};
//保存

function saveFile() {
  nv.saveImage("save.nii", true);
}
function saveImage() {
  nv.saveScene("save.png");
}
//删除
const handleDelete = (index: number, row: User) => {
  tableData.value.splice(index, 1);
};


//查看取色器是否发生变化，修改背景色
watchEffect(() => {
  const rgba = backcolor.value.match(/\d+(\.\d+)?/g).map((v) => +v);
  nv.opts.backColor = [rgba[0] / 255, rgba[1] / 255, rgba[2] / 255, rgba[3]];
  nv.updateGLVolume();
});
//查看取色器是否发生变化，修改切片颜色
watchEffect(() => {
  const rgba1 = clipcolor.value.match(/\d+(\.\d+)?/g).map((v) => +v);
  if (value2.value)
    nv.setClipPlaneColor([
      rgba1[0] / 255,
      rgba1[1] / 255,
      rgba1[2] / 255,
      rgba1[3],
    ]);
  // nv.opts.setClipPlaneColor([1, 1, 1, 0.5])
  nv.updateGLVolume();
});
const canvasRef = ref(null);
let context = null;



let ctx = ref(null);
onMounted(() => {
  nv.attachTo("gl");
  //加载体积信息
  nv.loadVolumes(volumeList.value); 
  ctx = myCanvas.value.getContext("webgl2");
  //使用 watch 来实时监听 value2.value 的变化
  console.log(ctx);
  
    
});
</script>


<style scoped>
.el-container {
  height: 85vh;
}
.el-aside {
  background-color: #ffffff;
  position: relative;
}
.collapse-button {
  position: absolute;
  top: 30px;
  right: 80px;
  transform: translateY(-50%);
  transition: left 0.3s;
}
.mx-1 {
  text-align: center;
}
.ml-2 {
  margin-left: 60px;
  margin-top: 35px;
}
.el-main {
  overflow: hidden;
  /* margin: 0; */
  padding: 0;
}
.demo-collapse {
  margin-left: 9px;
}
.is-active {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
#gl{
  width: 100%;
  height: 100%;
}
</style>