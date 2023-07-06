<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu"  size="mini">
                <el-icon><Menu /></el-icon>
            </el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/user.jpg" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="tiaozhuan()">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        // 获取 store 中的 isCollapse 值
        const store = useStore();
       const isCollapse = computed(() => store.state.tab.isCollapse);

        function handleMenu() {
            store.commit('collapseMenu');
        }
        function tiaozhuan(){
            window.location.href="http://localhost:8080/";
        }

        return {
            handleMenu,
            isCollapse,
            tiaozhuan,
        };
    },
};
</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>
