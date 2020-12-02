<template>
  <div>
    <el-dialog title="详情" :visible.sync="showDialog" width="900px" :before-close="handleClose" :close-on-click-modal="false">
      <div>
        <table class="detail-table">
          <tr>
            <th>用户名称</th>
            <td>{{ dataForm.userName }}</td>
            <th>用户邮箱</th>
            <td>{{ dataForm.email }}</td>
          </tr>
          <tr>
            <th>用户手机</th>
            <td>{{ dataForm.phone }}</td>
            <th>用户状态</th>
            <td>{{ dataForm.stateName }}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="handleClose">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
function getDataForm() {
  return {
    userName: "",
    email: "",
    phone: "",
    stateName: "",
  };
}
export default {
  name: "userDetail",
  data() {
    return {
      showDialog: false,
      pageTitle: "新增",
      stateList: [
        {
          label: "启用",
          value: "1",
        },
        {
          label: "禁用",
          value: "2",
        },
      ],
      dataForm: getDataForm(),
    };
  },
  methods: {
    open(data) {
      const vm = this;
      vm.dataForm = getDataForm();
      vm.getDetail(data);
      vm.showDialog = true;
    },
    handleClose() {
      const vm = this;
      vm.dataForm = getDataForm();
      vm.showDialog = false;
    },
    async getDetail(data) {
      const vm = this;
      vm.dataForm = data;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
