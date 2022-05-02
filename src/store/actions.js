import { 
  fetchNews,
  fetchAsk,
  fetchJobs, 
  fetchItem
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNews()
    .then( response => context.commit('SET_NEWS', response.data))
    .catch( error => console.log(error) )
  },
  FETCH_ASK(context) {
    fetchAsk()
      .then( response => context.commit('SET_ASK', response.data))
      .catch( error => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobs()
      .then( response => context.commit('SET_JOBS', response.data))
      .catch( error => console.log(error) );
  },
  FETCH_ITEM(context, userId) {
    fetchItem(userId)
      .then( res =>context.commit('SET_ITEM', res.data) )
      .catch( error => console.log(error) );
  }
}