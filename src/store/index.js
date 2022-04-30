import {createStore} from 'vuex'
import sourceData from '@/data.json'

export default createStore({
  state: sourceData,
  actions: {
    createPost(context, post){
      post.id = 'gggg' + Math.random()
      context.commit('setPost', { post })
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) //append the post to the thread
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post) //set the post
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId) //append the post to the thread
      thread.posts.push(postId)
    }
  }
})
