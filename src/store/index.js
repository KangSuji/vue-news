import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news:[],
    ask: [],
    jobs: [],
    item: {},
    user: {},
  },
  getters,
  mutations,
  actions,
})