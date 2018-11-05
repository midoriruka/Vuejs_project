var Event=new Vue();
Vue.component('say',{
    template:`<div>我说：<input type="text" @keyup="on_change" v-model="i_said"></div>`,
    data:function () {
        return {
            i_said:''
        }
    },
    methods:{
        on_change:function () {
            Event.$emit('i_said_sth',this.i_said);
        }
    }
});
Vue.component('speak',{
    template:`<div>说了什么：{{i_speak}}</div>`,
    data:function () {
        return {
            i_speak:''
        }
    },
    mounted:function () {
        var e=this;
        Event.$on('i_said_sth',function (data) {
            e.i_speak=data;
        })
    }
});
new Vue({
    el:'#app'
});