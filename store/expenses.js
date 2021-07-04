export const state = () => ({
  expenses: []
})

export const mutations = {
  setData(state, data) {
    state.expenses = data;
  }
}

export const actions = {
  async getData({ commit }) {
  // axiosでGASから当月のデータを取得
  const res = await this.$axios.$get('https://qiita.com/api/v2/items?page=1&per_page=10').then(res => res).catch(err => err.res)
  // const re1 = await this.$axios.$get('http://localhost:8000/api').then(res => res).catch(err => err.res)
  
  console.log('stateに入れる')
  const data = [
    {
      id: 'a',
      date: '20200701',
      name: 'くま',
      category1: '食費',
      outgo: 1000,
      remarks: 'ヨーカドー'
    },
    {
      id: 'b',
      date: '20200702',
      name: 'うさ',
      category1: '日用品',
      outgo: 2000,
      remarks: 'ニトリ'
    }
]

  // if (response.status === 200 && response.data.success) {
  //     commit("setProducts", response.data.data.products);
  // }

  // stateにcommitする
    commit("setData", data);
  }
}