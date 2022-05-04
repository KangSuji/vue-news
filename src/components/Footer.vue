<template>
  <div>
    <footer>
      <div>Copyright &copy; {{ date }} SUJI. All rights reserved.</div>
      <div>Contact webmaster for more information. 000-1234-5678</div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      const year = new Date().getFullYear();
      return year;
    }
  }

}
</script>

<style scoped>
  footer {
    width: 100%;
    padding: 15px 0px;
    margin-top: 15px;
    background-color: #E6DDC6;
    color: #A19882;
    text-align: center;
  }
</style>