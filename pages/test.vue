<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData: [{
        date: '2020-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2020-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2020-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2020-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }]
    }
  }
}
</script>