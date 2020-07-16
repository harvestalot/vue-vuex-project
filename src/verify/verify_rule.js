export default {
    username: {//用户名
        pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/,
        message: '仅支持4-20位字母、数字、“_”组合'
    },
    password:{//密码
        pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,20}$/,
        message: '仅支持8-20位字母、数字组合'
    },
    cellPhone: {//手机号
        pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
        message: '请输入正确的手机号'
    },
    telePhone: {//固定电话
        pattern: /^\d{3,4}-\d{6,8}$/,
        message: '请输入正确的固话号码'
    },
    carCode: {//车牌号
        pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
        message: '请输入正确的车牌号'
    },
    isEmail: {//邮箱
        pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: '请输入正确的邮箱'
    },
    enName:{//英文姓名
        pattern: /[\u4e00-\u9fa5\d]/,
        message: '仅支持纯英文大小写、空格、· 、.、,组合'
    },
    onlyEn: {//纯英文
        pattern: /^[A-Za-z]+$/,
        message: '仅支持纯英文大小写组合'
    },
    onlyZh: {//纯中文
        pattern: /^[\u4e00-\u9fa5]+$/,
        message: '仅支持纯中文'
    },
    onlyEnNum:{//英文或者数字
        pattern: /^[A-Za-z0-9]+$/,
        message: '仅支持纯英文大小写组合'
    },
    name: {//中文或者英文
        pattern: /^[a-zA-Z\u4e00-\u9fa5\·]+$/,
        message: '仅支持中文、英文组合'
    },
    address: {//包含中文、英文、数字 - _ ·（）3-80个字符
        pattern: /^[\u4E00-\u9FA5A-Za-z\d\-\_\(\)\（\）\·\“\”\"\"]{3,80}$/,
        message: '仅支持中文、英文、数字、-、_ 、（）、()、""、“”、· 3-80个字符'
    },
    onlyInt: {//整数
        pattern: /^[0-9]*$/,
        message: '仅支持输入整数'
    },
    onlyNum: {//数字包含小数
        pattern: /^[0-9]+([.][0-9]{1,2})$/,
        message: '仅支持输入整数'
    },
    containerNum: {//集装箱箱号
        pattern: /^[[a-zA-Z]{4}([0-9]{7})$/,
        message: '请输入标准的集装箱号'
    },
    IDNum:{
        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        message:"请输入合法的身份证号"
    },
    price:{
        pattern: "",
        message:"请输入大于0的数值"
    },
    authCode:{//认证证书编码
        pattern: /^[A-Za-z0-9\-]*$/,
        message: '请输入正确的证书编号'
    },
    domainName:{
        pattern:/^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/,
        message:"请输入正确的网站地址"
    },
}
