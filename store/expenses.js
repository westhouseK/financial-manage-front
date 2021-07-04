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
        // axiosでGASからデータを取得
        console.log('stateに入れる')
        const data = [{
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

        // stateにcommitする
        commit("setData", data);
    }
}