import { createStore } from 'vuex'
import axios from 'axios'
const bedUrl =  ;

export default createStore({
  state: {
    users: null,
    user:null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
setUsers(state,value) {
  state.users = values
  },
  setUser9(state,value) {
    state.user = value;
  }
},
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${bedUrl}users`);
      const {results,err} = await res.data;
      if(results){
        context.commit('setUsrs',results)
    }else{
      context.commit('setMessage',err)
    }
  },
  modules: {
  }
}
})
