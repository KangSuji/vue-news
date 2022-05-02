import { fetchNews } from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNews()
    .then( response => context.commit('SET_NEWS', response.data))
    .catch( error => console.log(error) )
  }
}