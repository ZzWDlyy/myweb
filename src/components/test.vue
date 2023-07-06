<template>
<div>
<p></p>
背景颜色:
<el-color-picker v-model="backcolor" show-alpha />
视角选择：
   <el-select v-model="value" placeholder="Select" @change="changeMode()">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
Colormap:
  <el-select v-model="colormap" placeholder="Select" @change="changeColormap()">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
labelColor:
   <el-select v-model="selectedLabel" placeholder="请选择">
      <el-option
        v-for="item in changeColor.labels"
        :key="item"
        :label="item"
        :value="item"
        >
      </el-option>
    </el-select>

    <el-color-picker v-model="color" @change="handleColorChange" size="mini"  show-alpha/>
<div>
<canvas id="gl" height="700" width="933">
</canvas>
</div>
</div>
</template>
<script setup lang="ts">
import {Niivue,NVController,nvImage} from '@niivue/niivue'
import loadDrawingFromUrl from '../../node_modules/@niivue/niivue'
import { ref, onMounted, watchEffect,watch,computed, defineExpose } from 'vue'
import blue from  '../../node_modules/@niivue/niivue/src/cmaps/blue.json'
import slicer3d from  '../../node_modules/@niivue/niivue/src/cmaps/_slicer3d.json'
import ROI_i256 from '../../node_modules/@niivue/niivue/src/cmaps/ROI_i256.json'
import gray from '../../node_modules/@niivue/niivue/src/cmaps/gray.json'
// import kind_11 from '../../node_modules/@niivue/niivue/src/cmaps/kind_11.json'
import actc from '../../node_modules/@niivue/niivue/src/cmaps/actc.json'
//初始化nv
const nv = new Niivue({
   logging: true,
   dragAndDropEnabled: true,
})
//初始化背景颜色
const backcolor = ref('rgba(204, 204, 204, 1)')
// console.log(slicer3d);
const colormap = ref('gray')
//设置一个colormap的object对象来对标签的颜色进行改变
const changeColor = ref({
  labels: ["background", "spleen", "right kidney", "left kidney", "gall bladder", "esophagus", "liver", "stomach", "arota", "postcava", "pancreas", "bladder"],
  R: [0, 255, 128, 255, 0, 64, 128, 192, 0, 128, 64, 192],
  G: [0, 0, 128, 0, 255, 64, 192, 128, 255, 192, 128, 64],
  B: [0, 0, 0, 128, 128, 255, 64, 0, 255, 64, 192, 128],
  A: [0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
  I: [0, 21, 42, 64, 85, 106, 128, 149, 170, 192, 213, 235, 255]
})
const selectedLabel = ref(changeColor.value.labels[0])
const color = ref('rgba(243, 240, 240, 0.71)')

const newColor = ref({r: 0, g: 0, b: 0, a: 0})

watch(selectedLabel, (newLabel) => {
  const index = changeColor.value.labels.indexOf(newLabel)
  if (index >= 0) {
    newColor.value = {
      r: changeColor.value.R[index],
      g: changeColor.value.G[index],
      b: changeColor.value.B[index],
      a: changeColor.value.A[index] / 255
    }
    color.value = `rgba(${newColor.value.r}, ${newColor.value.g}, ${newColor.value.b}, ${newColor.value.a})`
  } else {
    console.log('Invalid label selected.')
  }
})

const handleColorChange = () => {
  const index = changeColor.value.labels.indexOf(selectedLabel.value)
  
  // Parse RGBA values from color
  const match = color.value.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d+)?)\)/i);
  if (match) {
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    const a = parseFloat(match[4]); // alpha could be a floating point number
    // Use the parsed values
    changeColor.value.R[index] = r;
    changeColor.value.G[index] = g;
    changeColor.value.B[index] = b;
    changeColor.value.A[index] = a * 255;
    // update newColor
    newColor.value = {
      r: r,
      g: g,
      b: b,
      a: a
    };
    nv.updateGLVolume()
    nv.setDrawColormap(changeColor.value)
    nv.drawScene()
    changeColor.value.R = changeColor.value.R.slice(0, 12);
    changeColor.value.G = changeColor.value.G.slice(0, 12);
    changeColor.value.B = changeColor.value.B.slice(0, 12);
    changeColor.value.A = changeColor.value.A.slice(0, 12);
    changeColor.value.labels = changeColor.value.labels.slice(0, 12);
    console.log(changeColor.value)
  } else {
    console.log('Invalid color format');
  }
};



//选择框方向视角
const value = ref(nv.sliceTypeMultiplanar)
const nvImage = ref(null) 
const options = [
  {
    value: nv.sliceTypeAxial,
    label: 'Axial',
  },
  {
    value: nv.sliceTypeCoronal,
    label: 'Coronal',
  },
  {
    value: nv.sliceTypeSagittal ,
    label: 'Sagittal',
  },
  {
    value: nv.sliceTypeMultiplanar,
    label: 'Multiplanar',
  },
  {
    value: nv.sliceTypeRender,
    label: 'Render',
  },
]
//添加colormap
nv.addColormap('blue',blue)
nv.addColormap('gray',gray)
nv.addColormap('slicer3d',slicer3d)
nv.addColormap('ROI_i256',ROI_i256)
nv.addColormap('kind_11',kind_11)
nv.addColormap('changeColor',changeColor.value)

const options1 = [
  {
    value: 'gray',
    label: 'gray',
  },
  {
    value: 'blue',
    label: 'blue',
  },
  {
    value: 'slicer3d' ,
    label: 'slicer3d',
  },
  {
    value: 'ROI_i256',
    label: 'ROI_i256',
  },
  {
    value: 'kind_11',
    label: 'kind_11',
  },
  {
    value: 'actc',
    label: 'actc',
  },
  {
    value: 'changeColor',
    label: 'changeColor',
  }
 
]

function changeMode(){
    nv.setSliceType(value.value)
    nv.updateGLVolume()
}

function changeColormap(){
    console.log(colormap.value);
    console.log(nv.volumes[0].id);
    nv.setColorMap(nv.volumes[0].id,colormap.value)
    nv.updateGLVolume()
    nv.drawScene();
}

//查看取色器是否发生变化
watchEffect(() => {
  const rgba = backcolor.value.match(/\d+(\.\d+)?/g).map(v => +v)
  nv.opts.backColor = [rgba[0] / 255, rgba[1] / 255, rgba[2] / 255, rgba[3]]
  nv.updateGLVolume()
})

//nv.opts.isruler = true
//打开颜色映射表
nv.opts.isColorbar = true
nv.opts.isOrientCube=true
//draw
let cmap = {
  labels: ["background", "spleen", "right kidney", "left kidney", "gall bladder", "esophagus", "liver", "stomach", "arota", "postcava", "pancreas", "bladder"],
  R: [0, 255, 128, 255, 0, 64, 128, 192, 0, 128, 64, 192],
  G: [0, 0, 128, 0, 255, 64, 192, 128, 255, 192, 128, 64],
  B: [0, 0, 0, 128, 128, 255, 64, 0, 255, 64, 192, 128],
  A: [0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
};
nv.setDrawColormap(cmap)
nv.opts.dragAndDropEnabled=true
nv.setDrawingEnabled(true)
nv.setPenValue(1, true)
nv.loadDrawingFromUrl("/1.nii")
console.log(nv.opts.penValue);

nv.setDrawOpacity(0.7)
//设置选择框的颜色需要加入功能
nv.opts.selectionBoxColor=[0, 1, 0, 0.5]
//nv.opts.useQFormNotSForm
//伽马值调整
nv.setGamma(0.5);
nv.opts.textHeight = 0.06
//3Dcrosshair需要加入的功能
nv.opts.show3Dcrosshair=true
//网格着色器的选择
nv.setMeshShader(0);
//   需要加入的功能none: 0,
//   contrast: 1,
//   measurement: 2,
//   pan: 3,
//   slicer3D: 4,
nv.opts.dragMode=1
// nv.setClipPlane([42, 42])
// nv.setScale(2)设置转换到render的时候的大小
nv.setPenValue(2, true)
nv.updateGLVolume()

const volumeList = ref([
  {
    id: 'test',
    url: "/1.nii",
    colorMap:colormap.value
  }
])
onMounted(() => {
  nv.attachTo('gl')
  //加载体积信息
  nv.loadVolumes(volumeList.value)
  //加载图画信息
  nv.loadDrawingFromUrl('/1.nii')
  console.log(nv);
  
})

// function PressKey(key) {
//   let event = new KeyboardEvent('keydown', { key: key })
//   console.log(key);
//   window.dispatchEvent(event)
//   nv.setClipPlane([0, 90, 0]);
//   //nv.setClipPlaneColor([1, 1, 1, 0.5])
//   nv.setSliceType(nv.sliceTypeRender)
//   nv.updateGLVolume();
// }



</script>
