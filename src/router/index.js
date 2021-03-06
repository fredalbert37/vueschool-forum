import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Category from "@/components/pages/Category";
import Forum from "@/components/pages/Forum";
import ThreadShow from '@/components/pages/ThreadShow.vue'
import NotFound from '@/components/pages/NotFound.vue'
import SourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, _from, next) {
      //check iof thread exists
      const threadExists = SourceData.threads.find(threads => threads.id === to.params.id)
      //if exists continue
      if(threadExists) {
        return next()
      }else{
        //if doesnt exist redirect to 404
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path:'/:patchMatch(.*)*',
    name:'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
