<template>
  <div class="user">
    <div class="section-title">USER</div>
    <div class="user-info">
      <span class="material-icons">person</span>
      <div>
        <div>user name : {{ user.id }}</div>
        <div>karma : {{ user.karma }}</div>
        <div>created : {{ user.created }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId)
  }
}
</script>

<style scoped>
.user {
  padding: 15px;
}
.section-title{
  font-size: 2rem;
  font-weight: bold;
  color: #5e594d;
  padding: 0.5rem 0px;
}
.user-info{
  display: flex;
  align-items: center;
}
  .material-icons{
   font-size: 5rem;
   color: #C2B8A3;
  }
</style>