Vue.component('like',
    {
        template:'#liked_box',
        data:function () {
            return {
                liked_count:5,
                liked:false
            }
        },
        methods:{
            on_click:function () {
                if(!this.liked){
                    this.liked_count++
                }
                else{
                    this.liked_count--
                }
                this.liked=!this.liked;
            }
        }
    }
);
new Vue({
    el:'#app'
});