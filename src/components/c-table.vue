<template>
  <div class="container">
    <el-table :data="tableData" v-bind="attributes">
      <el-table-column
        v-for="(item, index) in column"
        :key="'column' + index"
        v-bind="item.attributes"
        :prop="item.prop"
        :label="item.label"
      >
        <template slot-scope="scope">
          <span v-if="!item.isSlot">{{ scope.row[item.prop] }}</span>
          <slot v-else :name="item.prop" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pagination"
      small
      background
      :current-page="pageInfo.pageNo"
      :page-size="pageInfo.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="pageInfo.total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "c-table",
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    attributes: {
      type: Object,
      default: () => {},
    },
    pageInfo: {
      type: Object,
      default: () => {
        return {
          pageNo: 1,
          pageSize: 10,
          total: 0,
        };
      },
    },
    pagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods:{
    handleCurrentChange(pageNo) {
      const vm = this;
      vm.pageInfo.pageNo = pageNo;
      vm.$emit("pageNoChange");
    },
  },
};
</script>

<style scoped lang="less">
</style>
