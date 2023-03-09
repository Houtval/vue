import Vuex from 'vuex'
import {apiSelectAll,apiSelectByName} from '../api/sildeControllers'
import {apiHingeByAll,apiHingeFindHinge} from '../api/hingeControllers'
import{apiGetAllMenu}from '../api/menuControllers'

 
export default new Vuex.Store({
  state: {
    search:'',
    indexslide:0,
    indexhinge:0,
    menuState:false,
    searchState:false,
    messagepage:1,
    adminMenuisCollapse:false,
    allSlide:[],
    allHinge:[],
    allMenu:[],
    searchSlide:[],
    searchHinge:[]
  },
  getters: {
  },
  mutations: {
    updateIndexSlide(state,index){
      state.indexslide=index
    },
    updateSearch(state,search){
      state.search=search
    },
    updateIndexHinge(state,index){
      state.indexhinge=index
    },
    ALLMENU (state, allMenu) {
      state.allMenu = allMenu
    },
    ALLSLIDE (state, allSlide) {
      state.allSlide = allSlide
    },
    ALLHINGE(state, allHinge){
      state.allHinge=allHinge
    },
    SEARCHHINGE(state, searchHinge){
      state.searchHinge=searchHinge
    },
    SEARCHSLIDE(state, searchSlide){
      state.searchSlide=searchSlide
    },
    muMenuState(state){
        state.menuState=!state.menuState;
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
      if(result.data.code=="20000"){
      commit('ALLSLIDE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
    } 
    },

    async allHinge ({ commit }) { // userList是在mounted定义的
      let result = await apiHingeByAll() // 使用引入的api函数，获取userList的地址请求
      if(result.data.code=="20000"){
        commit('ALLHINGE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }  
    },

    async allMenu ({ commit }) { // userList是在mounted定义的
      let result = await apiGetAllMenu() // 使用引入的api函数，获取userList的地址请求
      if(result.data.code=="20000"){
        commit('ALLMENU', Object.values(result.data.data))// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }  
    },

    async searchSlide ({ commit }) { // userList是在mounted定义的
      let result = await apiSelectByName(this.state.search) // 使用引入的api函数，获取userList的地址请求
      if(result.data.code=="20000"){
        commit('SEARCHSLIDE', )// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }  
    },

    async searchHinge ({ commit }) { // userList是在mounted定义的
      let result = await apiHingeFindHinge(this.state.search) // 使用引入的api函数，获取userList的地址请求
      if(result.data.code=="20000"){
        commit('SEARCHHINGE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }  
    },




  },
  modules: {
  }
})

