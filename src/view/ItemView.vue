<template>
  <div>
    <p>
      {{ this.items.comments}}
    </p>
  </div>
</template>

<script>
import { fetchItem } from '../api/index.js';

export default {
  data() {
    return {
      items:{}
    }
  },
  created(){
    fetchItem(this.$route.params.id)
      .then( res => this.items = res.data )
      .catch( error => console.log(error) );
  }
}
</script>

<style>

</style>