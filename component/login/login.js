Vue.component('login',{
    template:'#login',
    data:function () {
        return {
            yhm:'',
            mm:'',
            yzm:''
        }
    },
    methods:{
        denglu:function () {
            if(this.yhm==='admin'&& this.mm==='admin'){
                alert('登录成功！*★,°*:.☆(￣▽￣)/$:*.°★* 。');
                this.yhm='';
                this.mm='';
            }
        },
        quxiao:function () {
            this.yhm='';
            this.mm='';
        }
    }
});
new Vue({
    el:'#app'
});