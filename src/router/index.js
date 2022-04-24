import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/pages/Home.vue'
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
        return next({
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
