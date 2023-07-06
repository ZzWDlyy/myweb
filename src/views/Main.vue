<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header><CommonHeader /></el-header>
                    <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
export default {
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader
    }
}
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
</style>