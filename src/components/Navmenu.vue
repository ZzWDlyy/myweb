<template>
  <nav class="navbar navbar-expand-lg navbar-transparent" :class="{ transparent: isTransparent }">
    <div class="container">
      <!-- Logo -->
      <router-link class="text-white " id="logo" :to="{ name: 'Home' }">
        3D SmartHealthCare
      </router-link>

      <!-- Links -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Home -->
          <li class="nav-item">
            <router-link class="nav-link text-white link" :to="{ name: 'Home' }">首页</router-link>
          </li>
          <!-- Dropdown: Features -->
          <li class="nav-item ">
            <router-link class="nav-link text-white link" :to="{ name: 'Introduce' }">功能介绍 </router-link>
            <!-- <a class="nav-link  text-white dropdown-toggle link" href="#" id="navbarDropdownFeatures" role="button" data-bs-toggle="dropdown" aria-expanded="false">功能介绍</a>
            <ul class="dropdown-menu my-dropdown-menu" aria-labelledby="navbarDropdownFeatures">
              <li><router-link class="dropdown-item" :to="{ name: 'Introduce' }">功能1</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'Login' }">功能2</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'Home' }">功能3</router-link></li>
            </ul> -->
          </li>
          <!-- Dropdown: Implementation -->
          <li class="nav-item ">
            <!-- <a class="nav-link  text-white dropdown-toggle link" href="#" id="navbarDropdownImplementation" role="button" data-bs-toggle="dropdown" aria-expanded="false">实现原理</a>
            <ul class="dropdown-menu my-dropdown-menu" aria-labelledby="navbarDropdownImplementation">
              <li><router-link class="dropdown-item" :to="{ name: '' }">实现方法1</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '' }">实现方法2</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: '' }">实现方法3</router-link></li>
            </ul> -->
            <router-link class="nav-link text-white link" :to="{ name: 'Realize' }">实现原理 </router-link>
          </li>
          <!-- Login -->
          <li class="nav-item">
            <router-link class="nav-link text-white link" :to="{ name: 'Login' }">登陆 </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      isTransparent: true,
      timeout: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        this.isTransparent = false;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.isTransparent = true;
        }, 1000); // 在滚动停止1秒后再显示导航栏
      } else {
        this.isTransparent = true;
      }
    },
  },
});
</script>

<style scoped>
/* Custom styles for the navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(37, 35, 35, 0.933); /* 设置背景颜色为灰白色，初始时透明度为0.9 */
  transition: background-color 0.3s ease-in-out; /* 添加过渡效果 */
}

.navbar.transparent {
  background-color: rgba(255, 255, 255, 0); /* 设置背景颜色为透明 */
}

.navbar-brand img {
  height: 30px;
}

.my-dropdown-menu {
  right: 0;
}

@media (max-width: 767px) {
  .my-dropdown-menu {
    right: auto;
    left: 0;
  }
}

#logo {
  size: 100%;
}

.link {
  display: inline-block;
  padding: 0.5rem 1rem;
}
.text-white{
 color: black;
};
@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
}
</style>
