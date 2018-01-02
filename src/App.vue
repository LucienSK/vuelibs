<template>
  <div id="app">
    <router-link class="backlink" :to="{ path: '/'}"><div class="backbar"></div>返回</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*,html,body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.backlink {
  display: grid;
  text-decoration-line: none;
  padding: 10px 10px 10px 1.6rem;
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: left;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f3f3f3;
  color: #000000;
  font-size: .8rem;
  border-radius: 3px;
}
.backbar {
  position: absolute;
  top: .9rem;
  left: .9rem;
  display: inline-block; 
  float: left;
  border-left: 2px solid; border-bottom: 2px solid;  
  width: .6rem;
  height: .6rem;  
  transform: rotate(45deg); 
}
</style>
