<template>
  <div class="ask-item">
    <div class="section-title">ASK</div>
      <div class="user-info">
        <span class="material-icons">person</span>
        <div>
          <div>user : {{ items.user }}</div>
          <div>points : {{ items.points }}</div>
        </div>
      </div>
    <div>
      <span class="ask-title">{{ items.title }}</span>
      <p v-html="items.content"></p>
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
</style>