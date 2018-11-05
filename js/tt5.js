var base={
    methods:{
        show:function () {
            this.visible=!this.visible;
        },
        hide:function () {
            this.visible=!this.visible;
        }
    },
    data:function () {
        return {
            visible:false
        }
    }
};
Vue.component('popup',{
    template:`
    <div>
        <button @click="show">弹出</button>
        <div v-if="visible">
            <button @click="hide">X</button>
        nisjsisjsisj</div>
    </div>
    `,
    mixins:[base]
});
Vue.component('tooltip',{
    template:`
    <div>
    <div @mouseenter="show" @mouseleave="hide">显示</div>
    <div v-if="visible">显示</div>
    </div>
    `,
    mixins:[base]
});
new Vue({
    el:'#app'
});