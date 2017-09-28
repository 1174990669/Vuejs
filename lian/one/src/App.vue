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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,p,div,ul{margin:0;padding: 0;border:0;}
</style>

<script>
  var w = window.screen.width;
    var  scale = w/750;
    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "initial-scale="+scale+",user-scalable=no";
    document.head.appendChild(meta);
</script>
