<template>
  <div>
    <el-dialog :title="pageTitle" :visible.sync="showDialog" width="900px" :before-close="handleClose" :close-on-click-modal="false">
      <div>
        <el-form ref="dataForm" :model="dataForm" :rules="rules" label-width="120px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名称" prop="userName">
                <el-input v-model.trim="dataForm.userName" maxlength="20"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="用户邮箱" prop="email">
                <el-input v-model.trim="dataForm.email" maxlength="50"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户手机" prop="phone">
                <el-input v-model.trim="dataForm.phone" maxlength="11"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="用户状态" prop="state">
                <el-select v-model="dataForm.state">
                  <el-option v-for="item in stateList" :label="item.label" :value="item.value" :key="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="submit">确 定</el-button>
        <el-button size="small" @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import addAndUpdateRequest from "@/views/mixins/addAndUpdateRequest";
function getDataForm() {
  return {
    userName: "",
    email: "",
    phone: "",
    state: "",
  };
}
export default {
  name: "userEdit",
  mixins: [addAndUpdateRequest],
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
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        state: [{ required: true, message: "请选择用户状态", trigger: "blur" }],
      },
    };
  },
  methods: {
    open(data) {
      const vm = this;
      vm.dataForm = getDataForm();
      if (!data) {
        vm.pageTitle = "新增";
      } else {
        vm.pageTitle = "修改";
        vm.getDetail(data);
      }
      vm.showDialog = true;
    },
    handleClose() {
      const vm = this;
      vm.dataForm = getDataForm();
      vm.$refs.dataForm.resetFields();
      vm.showDialog = false;
    },
    async getDetail(data) {
      const vm = this;
      vm.dataForm = data;
    },
    submit() {
      const vm = this;
      vm.$refs.dataForm.validate((valid) => {
        if (valid) {
          let type = "add";
          if (vm.pageTitle === "修改") {
            type = "edit";
          }
          vm.addOrUpdateData(type, "getCreateUser", { ...vm.dataForm }, vm.requestSuccess);
        } else {
          return false;
        }
      });
    },
    // 请求成功后回调
    requestSuccess() {
      const vm = this;
      vm.handleClose();
      vm.$emit("requestSuccess");
    },
  },
};
</script>

<style lang="less" scoped>
</style>
