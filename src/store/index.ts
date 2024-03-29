import Vuex from 'vuex'
import { apiSelectAll, apiSelectByAll } from '../api/sildeControllers'
import { apiHingeByAll, apiHingeFindHinge } from '../api/hingeControllers'
import { apiGetAllMenu } from '../api/menuControllers'
import {apiGetImg1,apiGetImg2} from '../api/corporationControllers'


export default new Vuex.Store({
  state: {
    search: '',
    menuState: false,
    searchState: false,
    messagepage: 1,
    adminMenuisCollapse: false,
    allSlide: [],
    allHinge: [],
    allMenu: [],
    allCarousel1:[],
    allCarousel2:[],
    searchSlide: [],
    searchHinge: []

  },
  getters: {
  },
  mutations: {
    updateSearch(state, search) {
      state.search = search
    },
    ALLCAROUSEL1(state,allCarousel1){
      state.allCarousel1=allCarousel1
    },
    ALLCAROUSEL2(state,allCarousel2){
      state.allCarousel2=allCarousel2
    },
    ALLMENU(state, allMenu) {
      state.allMenu = allMenu
    },
    ALLSLIDE(state, allSlide) {
      state.allSlide = allSlide
    },
    ALLHINGE(state, allHinge) {
      state.allHinge = allHinge
    },
    SEARCHHINGE(state, searchHinge) {
      state.searchHinge = searchHinge
    },
    SEARCHSLIDE(state, searchSlide) {
      state.searchSlide = searchSlide
    },
    muMenuState(state) {
      state.menuState = !state.menuState;
    },
    musearchState(state) {
      state.searchState = !state.searchState;
    },
    addmessagepage(state) {
      state.messagepage++;
    },
    submessagepage(state) {
      if (state.messagepage > 1)
        state.messagepage--;
    },
    updateadminMenuisCollapse(state) {
      state.adminMenuisCollapse = !state.adminMenuisCollapse;
    }
  },
  actions: {
    async allSlide({ commit }) { // userList是在mounted定义的
      let result = await apiSelectAll() // 使用引入的api函数，获取userList的地址请求
      if (result.data.code == "20000") {
        commit('ALLSLIDE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },

    async allHinge({ commit }) { // userList是在mounted定义的
      let result = await apiHingeByAll() // 使用引入的api函数，获取userList的地址请求
      if (result.data.code == "20000") {
        commit('ALLHINGE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },

    async allMenu({ commit }) { // userList是在mounted定义的
      let result = await apiGetAllMenu() // 使用引入的api函数，获取userList的地址请求
      if (result.data.code == "20000") {
        commit('ALLMENU', Object.values(result.data.data))// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },

    async searchSlide({ commit }) { // userList是在mounted定义的
      let result = await apiSelectByAll(this.state.search) // 使用引入的api函数，获取userList的地址请求

      if (result.data.code == "20000") {
        commit('SEARCHSLIDE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }

    },

    async searchHinge({ commit }) { // userList是在mounted定义的
      let result = await apiHingeFindHinge(this.state.search)
      if (result.data.code == "20000") {
        commit('SEARCHHINGE', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },


    async allCarousel1({ commit }) { // userList是在mounted定义的
      let result = await apiGetImg1()
      if (result.data.code == "20000") {
        commit('ALLCAROUSEL1', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },

    async allCarousel2({ commit }) { // userList是在mounted定义的
      let result = await apiGetImg2()
      if (result.data.code == "20000") {
        commit('ALLCAROUSEL2', result.data.data)// 提交result并把返回结果赋值给USERLIST，最后再在mutats里面定义USERLIST
      }
    },




  },
  modules: {
  }
})

