<template>
  <div class="news">
    <slot name="title"></slot>
    <div class="news-section">
      <ul class="news-list">  
        <li v-for="item in items" :key="item.id">
          <a :href="item.url" v-if="item.domain && item.user">{{ item.title }}</a>
          <a :href="item.url" v-else-if="item.domain && item.user === null">{{ item.title }}</a>
          <router-link :to="`/item/${item.id}`" v-else-if="!item.domain && item.user" >{{ item.title }}</router-link>
          <div>
            <router-link :to="`/user/${item.user}`" class="news-info" >{{ item.user}} </router-link>
            <span v-if="item.domain && item.user === null" class="news-info">{{ item.domain}} </span >
            <span class="news-info"> | {{ item.time_ago}}</span>
          </div>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  computed: {
    items() {
      if(this.$route.path === '/news'){
        return this.$store.state.news; 
      }else if(this.$route.path === '/ask') {
        return this.$store.state.ask; 
      }else if(this.$route.path === '/jobs') {
        return this.$store.state.jobs; 
      }else{
        return '';
      }
    }
  },
  created() {
    if(this.$route.path === '/news'){
      this.$store.dispatch('FETCH_NEWS'); 
    }else if(this.$route.path === '/ask') {
      this.$store.dispatch('FETCH_ASK');
    }else if(this.$route.path === '/jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
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
    margin: 0px;
    padding: 0;
    
  }
  .news-list li {
    font-size: 18px;
    
  }
  .news-list li a:hover {
    text-decoration: underline;
    color: #5e594d;
    font-weight: bold;
  }
  .news-info {
    font-size: 1rem;
    color: #C2B8A3;
  }
</style>