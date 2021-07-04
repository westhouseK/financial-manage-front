<template>
  <div>
    <el-table
      :data="expenses"
      style="width: 100%">
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
