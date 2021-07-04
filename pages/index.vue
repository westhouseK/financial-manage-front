<template>
  <div>
    <el-table
      :data="expenses"
      style="width: 100%">
      <el-table-column 
        prop="date"
        label="購入日"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名前"
        width="180">
      </el-table-column>
      <el-table-column
        prop="category1"
        label="カテゴリ1"
        width="180">
      </el-table-column>
      <el-table-column
        prop="outgo"
        label="出費"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapMutaions, mapActions } from 'vuex';

export default {
  async fetch() {
    await this.getData()
  },
  computed: {
    ...mapState({
      expenses: state => state.expenses.expenses
    })
  },
  methods: {
    ...mapActions({
      getData: "expenses/getData"
    })
  }
}
  
    
</script>
