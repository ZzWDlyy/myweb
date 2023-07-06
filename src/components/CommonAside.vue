<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>{{ isCollapse ? '后台' : '通用后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(noChildren[0])"  :key="home" :index="home">
            <el-icon><HomeFilled /></el-icon>
            <span v:slot="title">首页</span>
        </el-menu-item>
        <el-menu-item @click="clickMenu(noChildren[1])"  :key="mall" :index="mall">
                <el-icon><Shop /></el-icon>
                <span v:slot="title">数据读取推理</span>
            </el-menu-item>
        <el-menu-item @click="clickMenu(noChildren[2])"  :key="user" :index="user">
            <el-icon><UserFilled /></el-icon>
            <span v:slot="title">预测展示平台</span>
        </el-menu-item>
        <el-sub-menu  v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template #title>
                <el-icon><Grid /></el-icon>
                <span v:slot="title">报告生成</span>
            </template>
            <el-menu-item-group  v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

  
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    height: 100vh;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;

    }
}
</style>
  
<script>
import { ElMenu} from 'element-plus';
export default {
    data() {
        return {
            menuData: [
                {
                    path: '/platform/home',
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                },
                {
                    path: '/platform/mall',
                    name: "数据读取推理",
                    label: "数据读取推理",
                    icon: "video-play",
                    url: "MallManage/MallManage",
                },
                {
                    path: '/platform/user',
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    url: "UserManage/UserManage",
                },
                {
                    label: "其他",
                    icon: 'location',
                    children: [
                        {
                            path: '/platform/page1',
                            name: "page1",
                            label: "页面1",
                            icon: "setting",
                            url: "Other/PageOne",
                        },
                        {
                            path: '/platform/page2',
                            name: "page2",
                            label: "页面2",
                            icon: "setting",
                            url: "Other/PageTwo",
                        },
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 点击菜单
        clickMenu(item) {
            console.log(item)
            // 当页面的路由与跳转的路由不一致才允许跳转
            if(this.$router.path !== item.path &&!(this.$route.path === '/home' &&(item.path ==='/')))
            {
                this.$router.push(item.path)
            }
            
        }
    },
    // 计算属性
    computed: {
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    },
    components: {
       ElMenu
    }
}
</script>

<style lang="less" scoped>
.el-menu {
    border-right: none;
}
</style>