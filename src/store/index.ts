import Vuex from 'vuex'
import {apiSelectAll} from '../api/sildeControllers'
 
export default new Vuex.Store({
  state: {
    Id:"",
    menuState:false,
    searchState:false,
    messagepage:1,
    adminMenuisCollapse:false,
    allSlide:[]
  },
  getters: {
  },
  mutations: {
    ALLSLIDE (state, allSlide) {
      state.allSlide = allSlide
    },
    muMenuState(state){
        state.menuState=!state.menuState;
    },
    updateId(state,newId){
      state.Id=newId
    },
    musearchState(state){
        state.searchState=!state.searchState;
    },
    addmessagepage(state){
      state.messagepage++;
    },
    submessagepage(state){
      if(state.messagepage>1)
      state.messagepage--;
    },
    updateadminMenuisCollapse(state){
      state.adminMenuisCollapse=!state.adminMenuisCollapse;
    }
  },
  actions: {
    async allSlide ({ commit }) { // userList是在mounted定义的
      let result = await apiSelectAll() // 使用引入的api函数，获取userList的地址请求
      commit('ALLSLIDE', result.data.data) // 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
    }
  },
  modules: {
  }
})

