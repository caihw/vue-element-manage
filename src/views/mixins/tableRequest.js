/**
 * @Created by 2020/11/30
 * @Author:caihongwen
 */
export default {
  data() {
    return {};
  },
  methods: {
    // 获取table数据
    getTableData(url, data) {
      const vm = this;
      const params = {
        data: { ...data },
        ...vm.pageInfo,
      };
      let promise = new Promise(resolve => {
        vm.api[url](params).then(res => {
          if (res.data && res.data.code === 0) {
            const data = res.data.data;
            vm.tableData = data.records || [];
            if (res.data.data.records && res.data.data.records.length > 0) {
              vm.pageInfo.pageNo = Number(res.data.data.current);
              vm.pageInfo.pageSize = Number(res.data.data.size);
              vm.pageInfo.total = Number(res.data.data.total);
            } else {
              vm.pageInfo.pageNo = 1;
              vm.pageInfo.pageSize = 10;
              vm.pageInfo.total = 0;
            }
            resolve(res.data.data);
          } else if (res.data && res.data.code && res.data.code !== 0) {
            vm.$message.error(res.data.msg);
          } else {
            vm.$message.error("系统错误，请联系管理员");
          }
        });
      });
      return promise;
    },
    // 删除table数据
    getDelTableData(url, params, callback) {
      const vm = this;
      vm.$confirm("确认删除该条数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        vm.api[url](params).then(res => {
          if (res.data && res.data.code === 0) {
            vm.$message.success("删除成功");
            callback();
          } else if (res.data && res.data.code && res.data.code !== 0) {
            vm.$message.error(res.data.msg);
          } else {
            vm.$message.error("系统错误，请联系管理员");
          }
        });
      }).catch(() => {});
    },
  },
};