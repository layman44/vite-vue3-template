<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<template>
  <div class="h-screen w-screen bg-white dark:bg-zinc-900">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
