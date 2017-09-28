<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,head,ul{margin:0;padding:0;}
li{list-style:none;}
a{text-decoration: none;color: #666;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script>
  var w = window.screen.width;
    var  scale = w/750;
    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "initial-scale="+scale+",user-scalable=no";
    document.head.appendChild(meta);
</script>
