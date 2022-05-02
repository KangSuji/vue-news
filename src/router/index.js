import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../view/NewsView.vue';
import AskView from '../view/AskView.vue';
import JobsView from '../view/JobsView.vue';
import ItemView from '../view/ItemView.vue';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/news'
    },
    {
      path:'/news',
      component: NewsView,
    },
    {
      path:'/Ask',
      component: AskView,
    },
    {
      path:'/Jobs',
      component: JobsView,
    },
    {
      path:'/item/:id',
      component: ItemView

    },
  ]
});

