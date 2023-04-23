<template>
  <div>
    <el-container>
      <el-main>
        <img src="../../assets/bg2.jpg" class="picture" alt="Example image" style="padding-top: 50px"/>
        <el-button type="primary">Click me</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>


<style lang="scss" scoped>
  /* 可以添加样式 */
  * {
    margin: 0;
    padding: 0;
  }
  
  .picture {
    width: 100%;
    height: 70%;
  }
  
  .no-display {
    display: none;
  }
</style>