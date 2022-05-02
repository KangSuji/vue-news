<template>
  <div>
    <h1>Ask</h1>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js'
export default {
  data() {
    return {
      items:[]
    }
  },
  created() {
    fetchAsk()
      .then( response => this.items = response.data)
      .catch( error => console.log(error));
  }
}
</script>

<style>

</style>