import verifyRule from "./verify_rule";

const FormValidate = {
    username: (rule, value, callback) => {
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.username.pattern.test(value)) {
            callback(new Error(verifyRule.username.message));
        }else{
            callback();
        }
    },
    password: (rule, value, callback) => {
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.password.pattern.test(value)) {
            callback(new Error(verifyRule.password.message));
        }else{
            callback();
        }
    },
    cellPhone: (rule, value, callback) => {//手机号
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.cellPhone.pattern.test(value)) {
            callback(new Error(verifyRule.cellPhone.message));
        }else{
            callback();
        }
    },
    telePhone: (rule, value, callback) => {//固定电话
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.telePhone.pattern.test(value)) {
            callback(new Error(verifyRule.telePhone.message));
        }else{
            callback();
        }
    },
    name: (rule, value, callback) => {//中文或者英文
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.name.pattern.test(value)) {
            callback(new Error(verifyRule.name.message));
        }else{
            callback();
        }
    },
    onlyInt: (rule, value, callback) => {//整数
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.onlyInt.pattern.test(value)) {
            callback(new Error(verifyRule.onlyInt.message));
        }else{
            callback();
        }
    },
    onlyEnNum: (rule, value, callback) => {//英文或者数字
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.onlyEnNum.pattern.test(value)) {
            callback(new Error(verifyRule.onlyEnNum.message));
        }else{
            callback();
        }
    },
    containerNum: (rule, value, callback) => {//集装箱号
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.containerNum.pattern.test(value)) {
            callback(new Error(verifyRule.containerNum.message));
        }else{
            callback();
        }
    },
    isEmail: (rule, value, callback) => {
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.isEmail.pattern.test(value)) {
            callback(new Error(verifyRule.isEmail.message));
        }else{
            callback();
        }
    },
    enName: (rule, value, callback) => {//英文姓名
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(verifyRule.enName.pattern.test(value)) {
            callback(new Error(verifyRule.enName.message));
        }else{
            callback();
        }
    },
    onlyZh: (rule, value, callback) => {//仅中文
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.onlyZh.pattern.test(value)) {
            callback(new Error(verifyRule.onlyZh.message));
        }else{
            callback();
        }
    },
    onlyEn: (rule, value, callback) => {//仅英文
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.onlyEn.pattern.test(value)) {
            callback(new Error(verifyRule.onlyEn.message));
        }else{
            callback();
        }
    },
    address: (rule, value, callback) => {//地址
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.address.pattern.test(value)) {
            callback(new Error(verifyRule.address.message));
        }else{
            callback();
        }
    },
    IDNum: (rule, value, callback) => {//身份证号
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.IDNum.pattern.test(value)) {
            callback(new Error(verifyRule.IDNum.message));
        }else{
            callback();
        }
    },
    carCode: (rule, value, callback) => {//车牌号
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(!verifyRule.carCode.pattern.test(value)) {
            callback(new Error(verifyRule.carCode.message));
        }else{
            callback();
        }
    },
    price: (rule, value, callback) => {//金额
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(value <= 0) {
            callback(new Error(verifyRule.price.message));
        }else{
            callback();
        }
    },
    authCode: (rule, value, callback) => {//金额
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(value <= 0) {
            callback(new Error(verifyRule.authCode.message));
        }else{
            callback();
        }
    },
    domainName: (rule, value, callback) => {//域名
        if (value === '') {
            callback(new Error(rule.requiredMessage));
        }else if(value <= 0) {
            callback(new Error(verifyRule.authCode.message));
        }else{
            callback();
        }
    },
    betweenLength:(rule, value, callback) => {//长度在...之间
        if( rule.min > value.length || value.length > rule.max) {
            callback(new Error( "长度在 "+ rule.min + " 到 " + rule.max +" 个字符" ));
        }else{
            callback();
        }
    }

}

export default FormValidate;
