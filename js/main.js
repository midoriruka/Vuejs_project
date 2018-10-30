var app=new Vue({
   el:'#app',
   methods:{
       clickBtn:function () {
           alert('点击了按钮');
       },
       mousein:function () {
           console.log('in');
       },
       mouseout:function () {
           console.log('out');
       },
       onSubmit:function () {
           console.log('submit');
       },
       onkeyup:function () {
           console.log('key pressed');
       },


   }
});