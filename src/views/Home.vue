<template>
  <div class="container">
    <h3>一个基于Vue、vuex、axios、vue-router的后台管理系统模板</h3>
    <h4>项目结构：</h4>
    <ul>
      <li>env.development（开发环境配置）</li>
      <li>env.production（运行环境配置）</li>
      <li>main.js（入口文件）</li>
      <li>App.vue（项目根组件）</li>
      <li>store（vuex文件夹）</li>
      <li>router（路由配置）</li>
      <li>components（公共组件）</li>
      <li>layout（header，menu，footer等组件）</li>
      <li>views（项目页面）</li>
      <li>utils（公共函数和方法）</li>
      <li>services（服务封装）</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="less">
.container {
  padding: 10px 20px;
  ul {
    list-style: decimal;
    li {
      margin: 10px 0;
    }
  }
}
</style>
