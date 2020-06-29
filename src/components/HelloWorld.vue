<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>来自store中的值：<span class="main_c">{{ getUsername }}</span></h2>
    <div>
        <div v-for="item in getBannerData" :key="item.id" class="banner_item"><img :src="serviceUrl + item.logoUrl" ></div>
    </div>
    <div>
        <el-button type="primary" @click="changUsernameHandle">设置值</el-button>
        <router-link to="/">返回</router-link>
        <router-link to="/echarts">查看统计</router-link>
    </div>
    <div>
        <el-button type="text" @click="toggleDialogHandle">点击打开 Dialog</el-button>
        <el-dialog
        title="提示"
        :visible.sync="getDialogVisible"
        width="30%"
        :before-close="toggleDialogHandle">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="toggleDialogHandle">取 消</el-button>
            <el-button type="primary" @click="toggleDialogHandle">确 定</el-button>
        </span>
        </el-dialog>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: '欢迎进入vuex的殿堂',
            username: "",
            serviceUrl: "http://192.168.1.220:8888/",
        }
    },
    computed:{
        getUsername(){
            return this.$store.state.userStore.username;
        },
        getBannerData(){
            return this.$store.state.userStore.bannerData;
        },
        getDialogVisible(){
            return this.$store.state.isDialogVisible;
        }
    },
    mounted(){
    },
    methods:{
        // setUsernameDefault(){
        //     this.username = this.$store.userStore.username;
        // },
        changUsernameHandle(){
            //1.同步更改
            // this.$store.commit({
            //     type: 'changUsernameHandle',
            //     params: {
            //         name: "变节者"
            //     }
            // });

            //2.异步更改
            this.$store.dispatch( 'userStore/changUsernameAsyncHandle', { name: "变节者" });
            // this.setUsernameDefault();
        },
        toggleDialogHandle(){
            this.$store.commit('toggleDialogHandle');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0b9df1;
}
.main_c{
  color: #0df0f0;
}
.banner_item{
    width: 192px;
    height: 108px;
    margin: 20px auto;
}
.banner_item img{
    width: 100%;
    height: 100%;
}
</style>
