<template>
  <div>
    <div>ASK</div>
    <div>user: {{ items.user }}</div>
    <div>points: {{ items.points }}</div>
    <h2>content</h2>
    <p v-html="items.content"></p>
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

<style>

</style>