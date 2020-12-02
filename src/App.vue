<template>
  <div id="app">
    <el-container>
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <LayoutAside></LayoutAside>
        </el-aside>
        <el-container>
          <el-main>
            <LayoutMain></LayoutMain>
          </el-main>
          <el-footer>
            <LayoutFooter></LayoutFooter>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from "@/layout/header.vue";
import LayoutAside from "@/layout/aside.vue";
import LayoutMain from "@/layout/main.vue";
import LayoutFooter from "@/layout/footer.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutMain,
    LayoutFooter,
  },
};
</script>
