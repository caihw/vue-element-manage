<template>
  <div class="container">
    <div class="left">
      <h3 class="systemName">后台业务管理系统</h3>
    </div>
    <div class="right hearder_right">
      <img :src="userPhoto" alt="">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          管理员<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>基本资料</el-dropdown-item>
          <el-dropdown-item>安全设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="text">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layoutheader",
  data() {
    return {
      userPhoto: require("../assets/img/common/user.jpg"),
    };
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background: black;
}

.systemName {
  color: #fff;
}

.hearder_right {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin:  0 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  /deep/.el-dropdown {
    margin: 0 10px;
    color: #fff;
  }
  /deep/.el-button--text {
    color: #fff;
  }
}
</style>
