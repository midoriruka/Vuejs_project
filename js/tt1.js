Vue.component('show_add1',{
    template: `<div>
        {{zengjia}}
        <add1 @add_data="data_add()"></add1>
        {{jianshao}}
        <add1 @add_data="data_minus"></add1>
        <div>{{count}}</div>
        </div>`,
    data:function(){
        return {
            count:5,
            zengjia:'增加',
            jianshao:'减少'
        };
    },
    methods:{
        data_add:function () {
            this.count++;
        },
        data_minus:function () {
            this.count--;
        }
    }
});
Vue.component('add1',{
    template: `<div><button @click="add1">点击</button></div>`,
    methods:{
        add1:function () {
            this.$emit('add_data',{a:222});
        }
    }
});
new Vue({
     el:'#app'
    }
);