<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
  
};
</script>

<style>
body,ul,p{margin:0;padding:0;}
body{max-width:768px;margin:0 auto;}
li{list-style:none}
html,body{font-family: "微软雅黑" !important;}
input{border-radius: none;background: transparent;}
button{-webkit-appearance:none;}
a{text-decoration:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
