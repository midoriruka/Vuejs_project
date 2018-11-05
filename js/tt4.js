Vue.directive('pin',function (el,binding) {
    var pined=binding.value;
    var position=binding.modifiers;
    var tt=binding.arg;
    if(pined){
        el.style.position='fixed';
        for(var key in position){
            if(position[key]){
                el.style[key]='10px';
            }
        }
        if(tt){
            el.style.background='yellow'
        }
    }
    else{
        el.style.position='static';
        el.style.background='bisque'
    }
});

new Vue({
    el:'#app',
    data:{
        pined:false
    }
});