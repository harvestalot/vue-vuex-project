<template>
   <div class="hv_100">
        <el-container class="hv_100">
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="3"><img src="@assets/logo.png" alt="" class="logo"></el-col>
                    <el-col :span="1">
                        <i class="el-icon-s-unfold" v-if="isCollapse" @click="isCollapse = !isCollapse"></i>
                        <i class="el-icon-s-fold" v-else @click="isCollapse = !isCollapse"></i>
                    </el-col>
                    <el-col :span="20" class="tr">

                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside style="width:230px;" class="aside_container">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" router>
                        <el-menu-item index="/home">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-user-solid"></i>
                                <span slot="title">用户管理</span>
                            </template>
                            <el-menu-item index="/user/add">新增</el-menu-item>
                            <el-menu-item index="/user/list">列表</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-grid"></i>
                                <span slot="title">数据管理</span>
                            </template>
                            <el-menu-item index="/dd">基础数据</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main style="background-color:#f5f5f5;">
                    <div style="background-color:#fff;">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>

   </div>
</template>

<script>
// import banner1 from '@assets/logo.png'
export default {
    data(){
        return {
            isCollapse: false,
            // logo:require(""),
        }
    }
}

</script>
<style scoped>
    .el-header{
        background-color: rgba(56, 157, 240, 0.979);
    }
    .el-header .logo{
        margin-top: 10px;
    }
    .aside_container{
        background-color: rgba(240, 233, 233, 0.979);
    }
    .el-icon-s-fold,
    .el-icon-s-unfold{
        margin-top: 15px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
</style>
<style lang="scss">
    .c{
        color: $--color-primary;
    }
</style>