<template>
 <div class="news">
    <div class="section-title">ASK</div>
    <div class="news-section">
      <ul class="news-list">  
        <li v-for="item in items" :key="item.id">
          <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    items: function() {
      return this.$store.state.ask;
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
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