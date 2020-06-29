import state from './state'
import mutations from './mutations'
import actions from './actions'


const userStore = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default userStore;