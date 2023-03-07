import Vuex from 'vuex'
 
 
export default new Vuex.Store({
  state: {
    Id:"",
    menuState:false,
    searchState:false,
    messagepage:1,
    adminMenuisCollapse:false,
  },
  getters: {
  },
  mutations: {
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

  },
  modules: {
  }
})

