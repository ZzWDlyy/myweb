<template>
  <el-header class="navbar">
    <div class="navbar-logo">
      <img src="../assets/logo.png" alt="Logo">
      <span class="navbar-logo-text">3D SmartHeath</span>
    </div>
    <el-menu :default-active="$route.name" class="navbar-links" mode="horizontal">
      <el-menu-item index="home">
        <router-link :to="{ path: '/', name: 'home' }" class="link">主页</router-link>
      </el-menu-item>
      <el-menu-item index="introduce">
        <router-link :to="{ path: '/introduce', name: 'introduce' }" class="link">功能介绍</router-link>
      </el-menu-item>
      <el-menu-item index="technology">
        <router-link :to="{ path: '/technology', name: 'TechnologyRealize' }" class="link">功能实现</router-link>
      </el-menu-item>
      <el-menu-item index="login">
        <router-link :to="{ path: '/login', name: 'login' }" class="link">登录</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      // Your data here
    }
  }
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
  width: 100%; /* 让导航栏的宽度为 100% */
}

.navbar-logo {
  display: flex;
  align-items: center;
  margin-right: 100px
}

.navbar-logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar-logo-text {
  font-size: 24px;
  color: #2d9ad1;
  font-weight: bold;
  font-family: sans-serif; /* 改变字体格式为 sans-serif */
}

.navbar-links {
  background-color: #ffffff;
  border: none;
  font-size: 20px;
  margin: 0;
}

.navbar-links a {
  color: #0c0c0c;
  text-decoration: none;
  font-size: 15px;
}

.navbar-links .is-active a {
  color: #409eff;
  
}
.link{
	color: #000;
	font-size:15px;
}
.navbar-links a:hover {
  color: #409eff;
}
</style>