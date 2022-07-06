<template>
  <div class="login">
    <h3>后台管理系统</h3>
    
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
      <!-- 姓名 -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item style="margin-left: -80px;">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 按需引入
import axios from 'axios';
export default {
  name:"login",
  data(){
    return{
      // 初始化
      ruleForm: {
        name: '',
        password: ''
      },
      // 验证
      rules: {
        name: [
          {required: true, message: "请输入姓名", trigger: "blur"},
          {min: 3, max: 5, message: "长度在3到5个字符", trigger: "blur"}
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {min: 5, max: 18, message: "长度在5到18个字符", trigger: "blur"}
        ],
      }
    }
  },
  methods: {
    submitForm(formName){
      let {name,password} = this.ruleForm;
      // 路由跳转
      // this.$router.push("/home"); 
      this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('api/user',
            {
              user:name,
              password:password
            }).then(res => {
              console.log(res);
              let code = res.status;
              if(code == 200&& res.data.data.verifySuccess == true) {
                this.$router.push('/home');
              }else{
                alert('用户名和密码不匹配');
              }
            }).catch(err => {
              console.log(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style scoped>
.login{
  text-align: center;
}
/* element.style {
    margin-left: 0px;
} */
</style>