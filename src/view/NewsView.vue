<template>
  <div class="news">
    <div class="section-title">News</div>
    <div class="news-section">
      <ul class="news-list">  
        <li v-for="item in news" :key="item.id">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  computed: {
    news: function() {
      return this.$store.state.news;
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS'); 
  }
}
</script>

<style scoped>
  .news {
    padding: 15px;
  }
  .section-title{
    font-size: 2rem;
    font-weight: bold;
    color: #5e594d;
    padding: 0.5rem 0px;
  }
  .news-list{
    margin: 0;
    padding: 0;
  }
  .news-list li {
    font-size: 18px;
    line-height: 1.5rem;
  }

  .news-list li a:hover {
    text-decoration: underline;
    color: #5e594d;
    font-weight: bold;
  }
</style>