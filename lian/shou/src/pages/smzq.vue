<template>
  <div  >
      <router-link to="/tab1" tag="h2">切换1</router-link>
      <router-link to="/tab1" tag="h2">切换2</router-link>
      <input type="text" v-model="a">
       
        <router-view></router-view>
       
  </div>
</template>   

<script>
 
export default {
  data () {
    return {
      a: '这个是a变量'
    }
  },
  methods:{
    printabcd(){
      console.log("方法abcd");
    }
  },
  // beforeCreate: function() {
  //   console.log("创建前")
  //   console.log(this.a)
  //   // console.log(this.$el)
  //   // this.printabcd()
  // },
  // created: function() {
  //   console.log("创建之后");
  //   console.log(this.a)
  //   console.log(this.$el)
  //   this.printabcd()
  // },
  // beforeMount: function() {
  //   console.log("mount之前")
  //   console.log(this.a)
  //   console.log(this.$el)
  // // this.printabcd()
  // },
  // mounted: function() {
  //   console.log("mount之后")
  //   console.log(this.a)
  //   console.log(this.$el);

  // // this.printabcd();
  // },
  beforeUpdate: function() {
    console.log("更新前");
    // alert(this.a);
    console.log(this.a)
    this.printabcd()
  },
  updated: function() {
    console.log("更新完成");
    console.log(this.a)
  // this.printabcd();
  },
  beforeDestroy: function() {
    console.log("销毁前");
    console.log(this.a)
    console.log(this.$el)
  // this.printabcd();
  },
  destroyed: function() { 
    console.log("已销毁");
    console.log(this.a)
    console.log(this.$el)
     
  // this.printabcd();
  }
}
</script>
<style >
  input{
    border: 1px solid red;
    height: 40px;
  }
</style>
