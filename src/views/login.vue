<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input type="text" v-model="ruleForm.account" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <img :src="ruleForm.Url" @click="refreshCode" alt=""/>
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<style scoped lang="stylus">
  .login {
    width 100%
    height 100%
    background-color: #2d3a4b
    .login-ruleForm {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
  }
</style>
<script>
  export default {
    data() {
      var validateAccount = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account: '',
          password: '',
          code: '',
          Url: '/leon-system/captcha.jpg',
        },
        rules: {
          account: [
            {validator: validateAccount, trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          code: [
            {validator: checkCode, trigger: 'blur'}
          ]
        }
      };
    },
    computed: {},
    methods: {
      refreshCode: function () {
        this.ruleForm.Url = "/leon-system/captcha.jpg'?ts=" + new Date().getTime();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$ajax({
              method: 'post',
              url: this.baseURL + 'sys/login',
              dataType: "json",
              data: {
                username: this.ruleForm.account,
                password:this.ruleForm.password,
                captcha: this.ruleForm.code
              }
            }).then(data => {
              if (data.code === 0) {//登录成功
                localStorage.setItem('token', data.token);
                parent.location.href = 'index.html';
              }
            }).then(err => {
              console.log(err);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
