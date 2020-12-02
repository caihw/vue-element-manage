<template>
  <div class="container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#393D49"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1" @click="tolink('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="tolink('/user')" >
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LayoutAside",
  data() {
    return {};
  },
  methods: {
    tolink(path) {
      const vm = this;
      vm.$router.push({
        path,
      });
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: calc(100vh - 60px);
  background: #393D49;
}
/deep/.el-menu {
  border-right: 0;
}
/deep/.el-menu-item.is-active {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
</style>
