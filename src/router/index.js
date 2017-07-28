import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
// import index from '@/components/index'
import editor from '@/components/editor/editor.vue'
import table from '@/components/tab/tab.vue'
import addArticle from '@/components/addArticle/addArticle.vue'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table',
      component: table
    },
    {
      path:'/article/:id/editor',
      name:"editorArticle",
      component:editor
    },
    {
      path:'/article/addArticle',
      name:'add-article',
      component:addArticle
    }
  ]
})
