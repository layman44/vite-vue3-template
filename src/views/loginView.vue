<script setup lang="ts">
const router = useRouter();

const loginForm = reactive({
  username: '',
  password: '',
  captcha: '',
});

const login = () => {
  router.push({ name: 'home' });
};

// const refreshCaptcha = () => {
//   console.log('refresh captcha');
// };
</script>
<template>
  <div class="min-h-screen flex items-center justify-center text-center">
    <div class="bg-white p-8 shadow rounded-lg w-96 border">
      <h2 class="text-2xl font-semibold mb-4">登录</h2>
      <el-form ref="loginForm1" :model="loginForm" label-position="top">
        <el-form-item label="用户名">
          <el-input
            v-model="loginForm.username"
            clearable
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="loginForm.password"
            clearable
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="flex flex-1 justify-between">
            <el-input
              v-model="loginForm.captcha"
              clearable
              placeholder="请输入验证码"
            ></el-input>
            <div class="w-28 h-full bg-gray border flex ml-4">
              <span>显示验证码</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="flex-1" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped></style>
