import axios from 'axios'
const userMutations = {
    changUsernameHandle(state, payload){
        state.username = payload.name
        axios.get('http://192.168.1.50:7010/api/other-services/friendlyLink/selectAll',{})
        .then(res => {
            state.bannerData = res.data.data;
        })
        .catch((e) => {
            console.log('获取数据失败');
        });
    }
}
export default userMutations;