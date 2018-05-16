<template>
  <div id="app">
    <hello-world></hello-world>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="footer">
      <h3>----------------</h3>
    </div>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
