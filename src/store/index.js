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
    },
    setReset() {
      this.state.count = 0;
      return;
    },
    setValue(state, value){
      state.count=value
      return
    }
     
  },
  actions: {
    asyncIncrement({ commit }, asyncNum) {
      setTimeout(() => {
        commit("increment", asyncNum);
      }, 500)
    },
      asyncDecrement({ commit }, asyncNum) {
        setTimeout(() => {
          commit("decrement", asyncNum);
        }, 500)
    },
   
    asyncsetReset({ commit }, asyncNum){
      setTimeout(() => {
        commit("setReset", asyncNum);
      }, 500)
    }, 
   asyncsetValue({ commit }, asyncNum){
      setTimeout(() => {
      commit("setValue", asyncNum);
     }, 500)
    }, 
  },
  modules: {
  },
})
