import MUtil from '../util/mm'
const _mm   = new MUtil();
class User{
    login(loginInfo){
        return _mm.request({
            type:'post',
            url:'/manage/user/login.do',
            data:loginInfo
        })
    }
    // 登录接口数据合法验证
    checkLoginInfo(loginInfo){
        console.log(loginInfo)
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        if(typeof username !== 'string' || username.length == 0){
            return {
                status:false,
                msg:'用户名不能为空'
            }
        }
        if(typeof password !== 'string' || password.length == 0){
            return {
                status:false,
                msg:'密码不能为空'
            }
        }
        return{
            status:true,
            msg:'验证通过'
        }
    }
}

export default User;