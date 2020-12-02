/**
 * @Created by 2020/11/30
 * @Author:caihongwen
 */
export default {
  data() {
    return {
      loading: undefined,
    };
  },
  methods: {
    // 新增or修改数据
    addOrUpdateData(type, url, params, callback) {
      const vm = this;
      const title = type === "edit" ? "修改" : "新增";
      vm.loading = this.$loading({
        lock: true,
        text: `正在${title}...`,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      vm.api[url](params).then(res => {
        vm.loading.close();
        if (res.data && res.data.code === 0) {
          vm.$message.success(`${title}成功`);
          callback();
        } else if (res.data && res.data.code && res.data.code !== 0) {
          vm.$message.error(res.data.msg);
        } else {
          vm.$message.error("系统错误，请联系管理员");
        }
      }).catch(() => {
        vm.loading.close();
      });
    },
  },
};