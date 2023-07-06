<template>
  <el-container>
     <el-main>
      <!-- 主要内容区域 -->
    </el-main>
    <el-aside :width="isCollapse.value ? '10px' : '200px'">
      <el-menu :collapse="isCollapse.value">
        <el-button type="primary" @click="isCollapse.value = !isCollapse.value" class="collapse-button">{{ isCollapse.value ? '<<' : '>>' }}</el-button>
        <el-submenu index="1">
          <template #title><i class="el-icon-lx-home"></i>选项一</template>
          <el-menu-item index="1-1">
            <el-radio-group v-model="radio.value">
              <el-radio label="1">选项1</el-radio>
              <el-radio label="2">选项2</el-radio>
            </el-radio-group>
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-select v-model="value.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-menu-item>
        </el-submenu>
        <!-- 添加更多的组件 -->
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';

const radio = ref('1');
const value = ref('');
const options = ref([
  {
    value: '选项1',
    label: '选项1'
  }, 
  {
    value: '选项2',
    label: '选项2'
  }, 
  {
    value: '选项3',
    label: '选项3'
  }
]);
const isCollapse = ref(false);

</script>

<style scoped>
.el-container {
  height: 85vh;
}
.el-aside {
  background-color: #dee2e8;
  position: relative;
}
.collapse-button {
  left: 5;
  margin-top:18px ;
  transform: translateY(-50%);
  transition: left 0.3s;
}
</style>
