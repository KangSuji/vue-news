import axios from 'axios';

function fetchNews() {
  return axios.get('https://api.hnpwa.com/v0/news/1.json');
}
function fetchAsk() {
  return axios.get('https://api.hnpwa.com/v0/ask/1.json');
}
function fetchJobs() {
  return axios.get('https://api.hnpwa.com/v0/jobs/1.json');
}
function fetchItem(id) {
  return axios.get(`https://api.hnpwa.com/v0/item/${id}.json`)
}
function fetchUser(id) {
  return axios.get(`https://api.hnpwa.com/v0/user/${id}.json`)
}

export {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchItem,
  fetchUser
}