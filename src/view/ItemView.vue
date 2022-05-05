<template>
  <div class="ask-item">
    <div class="section-title">ASK</div>
      <div class="user-info">
        <span class="material-icons">person</span>
        <div>
          <router-link :to="`/user/${items.user}`">user : {{ items.user }}</router-link>
          <div></div>
          <div>points : {{ items.points }}</div>
        </div>
      </div>
    <div>
      <span class="ask-title">{{ items.title }}</span>
      <p v-html="items.content"></p>
    </div>
    <div>
      <div class="comments-title-section">
        <div class="section-title">comments</div>
        <span class="material-icons">arrow_drop_down</span>
      </div>
      <div class="comments-section">
        <div v-for="(value,index) in items.comments" :key="index" class="comments">
          <router-link :to="`/user/${items.comments[index].user}`">user : {{ items.comments[index].user }}</router-link>
          <div>time_ago: {{ items.comments[index].time_ago }}</div>
          <div v-html="items.comments[index].content"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>


export default {
  computed: {
    items() {
      return this.$store.state.item;
    }
  },
  created(){
    const userId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM',userId);

      
  }
}
</script>

<style scoped>
  .ask-item {
    padding: 15px 25px 0px 25px;
    
  }
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #5e594d;
    padding: 0.5rem 0px;
  }
  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }
  .material-icons{
    font-size: 3rem;
    color: #5e594d;
  }
  .ask-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #5e594d;
    padding: 0.5rem 0px;
  }
  .comments-title-section {
    display: flex;
    align-items: center;
  }
  .comments {
    border-bottom: 1px dashed #5e594d;
    margin-bottom: 10px;
  }
</style>