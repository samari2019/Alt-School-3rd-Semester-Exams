import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  getters: {
  },
  mutations: {
    increment(state,num) {
      state.count += num;
    },
    decrement(state,num) {
      state.count -= num;
    }
  },
  actions: {
    asyncIncrement({ commit }, asyncNum) {
      setTimeout(() => {
        commit("increment", asyncNum);
      }, 1500)
    },
      asyncDecrement({ commit }, asyncNum) {
        setTimeout(() => {
          commit("decrement", asyncNum);
        }, 1500)
    }
  },
  modules: {
  },
})
