<template>
  <div>
    <el-table
      :data="expenses.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      stripe
      height="400"
      style="width: 100%">
      <el-table-column prop="date" label="購入日" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="名前" width="180" sortable></el-table-column>
      <el-table-column prop="category1" label="カテゴリ1" width="180"></el-table-column>
      <el-table-column prop="outgo" label="出費" width="180" sortable></el-table-column>
      <el-table-column prop="remarks" label="備考" width="250"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
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
  data() {
    return {
      search: ''
    }
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
