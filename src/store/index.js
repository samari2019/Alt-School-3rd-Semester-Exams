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
     // setCount (state,num) {
     //  state.count = num
    //  }
   // setCount(){
    //  return{
     //   set:0
   //   }
  //  }
  },
  actions: {
    asyncIncrement({ commit }, asyncNum) {
      setTimeout(() => {
        commit("increment", asyncNum);
      }, 1000)
    },
      asyncDecrement({ commit }, asyncNum) {
        setTimeout(() => {
          commit("decrement", asyncNum);
        }, 1000)
    },
   
    asyncsetReset({ commit }, asyncNum){
      setTimeout(() => {
        commit("setReset", asyncNum);
      }, 1000)
    }, 
  //  asyncupdateMessage({ commit }, asyncNum){
     // setTimeout(() => {
     //   commit("updateMessage", asyncNum);
    //  }, 1000)
   // }, 
  },
  modules: {
  },
})
