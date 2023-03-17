<template>
  <div class="login">
    <h2>登录</h2>
    <nut-form ref="ruleForm" :model-value="formData">
      <nut-form-item required prop="username" :rules="[{ required: true, message: '请输入用户名' }]">
        <input v-model="formData.username" class="nut-input-text" placeholder="请输入用户名" type="text" />
      </nut-form-item>
      <nut-form-item required prop="password" :rules="[{ required: true, message: '请填写联系电话' }]">
        <input v-model="formData.password" class="nut-input-text" placeholder="请输入密码" type="password" />
      </nut-form-item>
      <br />
      <nut-button block type="info" @click="submit"> 登录 </nut-button>
    </nut-form>
    <h4 style="text-align: center; line-height: 4">账号密码 admin/123456 ； 123/123</h4>
    <h4 style="text-align: center; line-height: 4">一个基于vue3-vite3-ts-pinia的h5开发模版</h4>
    <h4 style="text-align: center; line-height: 1; transform: scale(1)">
      <a style="text-decoration: underline" href="https://github.com/chenxuba/vite3-vue3-pinia-h5-template.git">github地址</a>
    </h4>
    <div style="display: flex; justify-content: center">
      <div>
        <h4 style="text-align: center; line-height: 4">作者微信</h4>
        <div style="text-align: center">
          <img style="width: 140px" src="/@/assets/WechatIMG15.jpeg" alt="" />
        </div>
      </div>
      <div>
        <h4 style="text-align: center; line-height: 4">扫码体验</h4>
        <div style="text-align: center">
          <img style="width: 140px; height: 140px" src="/@/assets/ma.png" alt="" />
        </div>
      </div>
    </div>
    <h4 style="text-align: center; line-height: 2">欢迎扫码交流</h4>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  import router from '/@/router';
  import { reactive, ref } from 'vue';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();
  const formData = reactive({
    username: '',
    password: '',
  });
  const ruleForm = ref<any>(null);
  const submit = () => {
    ruleForm.value.validate().then(async ({ valid, errors }: any) => {
      if (valid) {
        const userInfo = await userStore.login(formData);
        console.log(userInfo);
        if (userInfo) {
          router.push({ path: '/home' });
        }
      } else {
        console.log('error submit!!', errors);
      }
    });
  };
</script>

<style scoped lang="scss">
  .login {
    padding: 20px;

    h2 {
      text-align: center;
      letter-spacing: 10px;
    }

    .nut-form-item {
      background: #f2f3f5;
      border-radius: 20px;
      margin-bottom: 20px;

      input {
        background: transparent;
      }
    }
  }
</style>
