import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isDialogVisible : false,
    },
    actions:{
    },
    mutations:{
        toggleDialogHandle(state){
            state.isDialogVisible = !state.isDialogVisible;
        },

    },
    modules: {
        userStore
    }
})