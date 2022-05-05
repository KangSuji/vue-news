<template>
  <div id="app">
    <Header></Header>
    <tool-bar></tool-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
    Footer,
    Header,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  background-color: #FEF7DC;
}
#app {
  width: 50%;
  margin: 0 auto;
  background-color: #fff;
}
a {
  color: #000;
  text-decoration:  none;
}
li{
  list-style: none;
}
</style>
