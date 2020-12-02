<template>
  <div class="container">
    <el-form :inline="true" :model="searchForm" class="demo-form-inline" size="mini">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.userNmae" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchFun">查询</el-button>
        <el-button type="primary" @click="createFun">新增</el-button>
      </el-form-item>
    </el-form>
    <c-table :pageInfo="pageInfo" :column="column" :tableData="tableData" :attributes="Attributes" @pageNoChange="getUserList">
      <!-- 自定义列的显示内容 slot值为当前列的prop值 -->
      <template slot="operation" slot-scope="data">
        <el-button @click="detailFun(data.scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="editFun(data.scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="deleteFun(data.scope.row)" type="text" size="small">删除</el-button>
      </template>
    </c-table>
    <user-edit ref="userEdit" @requestSuccess="getUserList"></user-edit>
    <user-detail ref="userDetail"></user-detail>
  </div>
</template>

<script>
import cTable from "@/components/c-table.vue";
import userEdit from "./edit.vue";
import userDetail from "./detail.vue";
import tableList from "@/views/mixins/tableRequest";
export default {
  name: "userList",
  mixins: [tableList],
  components: {
    cTable,
    userEdit,
    userDetail,
  },
  data() {
    return {
      searchForm: {
        userNmae: "",
      },
      column: [
        {
          prop: "index",
          label: "序号",
          attributes: { // 参照element-ui Table column
            type: "index",
            width: "50px",
            align: "center",
          },
        },
        {
          prop: "userName",
          label: "用户名",
        },
        {
          prop: "email",
          label: "邮箱",
        },
        {
          prop: "phone",
          label: "手机号",
          attributes: {
            align: "center",
          },
        },
        {
          prop: "stateName",
          label: "状态",
          attributes: {
            align: "center",
          },
        },
        {
          prop: "createTime",
          label: "创建时间",
          attributes: {
            width: "130px",
            align: "center",
          },
        },
        {
          prop: "operation",
          label: "操作",
          attributes: {
            width: "130px",
            align: "center",
          },
          isSlot: true, // 自定义列的显示内容时设置为true
        },
      ],
      pageInfo: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      tableData: [
        {
          id: "",
          userName: "张三",
          email: "zhangsan@163.com",
          phone: "15986352363",
          state: "1",
          stateName: "启用",
          createTime: "2020-11-30",
        },
      ],
      Attributes: { // 参照element-ui Table
        border: true,
      },
    };
  },
  mounted() {
    const vm = this;
    vm.getUserList();
  },
  methods:{
    searchFun() {
      const vm = this;
      vm.pageInfo.pageNo = 1;
      vm.getUserList();
    },
    getUserList() {
      const vm = this;
      const searchData = { ...vm.searchForm };
      vm.getTableData("getUserInfo", searchData);
    },
    createFun() {
      const vm = this;
      vm.$refs.userEdit.open();
    },
    editFun(data) {
      const vm = this;
      vm.$refs.userEdit.open(data);
    },
    detailFun(data) {
      const vm = this;
      vm.$refs.userDetail.open(data);
    },
    deleteFun(data) {
      const vm = this;
      vm.getDelTableData("getDeleteUser", data.id, vm.deleteCallback);
    },
    // 删除成功回调
    deleteCallback() {
      const vm = this;
      vm.getUserList();
    },
  },
};
</script>

<style scoped lang="less">
</style>
