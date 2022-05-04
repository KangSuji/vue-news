<template>
  <div class="container">
    <router-link to="/news">News</router-link>  
    <router-link to="/ask">Ask</router-link>  
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    padding: 15px 25px;
    background-color: #E6DDC6;
    color: #A19882;
    font-size: 1.2rem;
  }
  .container a {
    color: #5e594d;
    margin-right: 1rem;
  }
  .container a:hover{
    text-decoration: underline;
    font-weight: bold;
  }
  .router-link-exact-active {
    font-weight: bold;
  }
</style>