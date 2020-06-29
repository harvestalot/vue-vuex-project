
const userActions = {
    changUsernameAsyncHandle (context, payload){
        context.commit('changUsernameHandle', payload);
    }
}

export default userActions;