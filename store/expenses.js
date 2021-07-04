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
            id: 'aaaaaa',
            date: '20200701',
            name: '私',
            category1: '食費',
            outgo: 1000
        }]

        // stateにcommitする
        commit("setData", data);
    }
}