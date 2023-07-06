<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/user.jpg" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info"></div>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.user {
    display: flex;
    img {
        width:150px;
        height:150px;
        border-radius: 50%;
    }
}
.box-card {
    height: 100%;
}
</style>