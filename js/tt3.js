Vue.filter('money',function (val) {
        return val+'元';
    }
);
new Vue({
    el:'#app',
    data:{
        price:10
    }
});