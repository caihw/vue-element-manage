<template>
  <div>
    <el-card class="box-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card class="box-card box-card-main">
      <router-view />
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LayoutMain",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.box-card-main {
  height: calc(100vh - 215px);
  margin-top: 10px;
  overflow: auto;
}
</style>
