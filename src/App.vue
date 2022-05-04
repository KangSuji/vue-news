<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
    Footer,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
}
a {
  color: #000;
  text-decoration:  none;
}
li{
  list-style: none;
}
</style>
