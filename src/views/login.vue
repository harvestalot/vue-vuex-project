<template>
   <div class="hv_100 login_container">
       <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-on:click="onSubmit('loginForm')" class="w_100">登录</el-button>
            </el-form-item>
        </el-form>
   </div>
</template>

<script>
export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            this.$router.push("/home");
          } else {
            return false;
          }
        });
      }
    }
}

</script>
<style scoped>
    .login_container{
        background-color: rgba(248, 244, 244, 0.877);
    }
    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 350px;
        height: 300px;
        padding: 30px 30px 15px 0;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border: 1px solid #DCDFE6;
        box-shadow: 0 0 20px #909399;
        background-color: #fff;
    }

  .login-title {
    text-align: center;
    margin: 0 auto 30px;
    color: #303133;
    font-size: 20px;
  }
</style>