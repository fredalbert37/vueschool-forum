<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model.trim="text" v-on:keyup.enter="save" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
"@/data.json";

export default {
  name: "PostEditor.vue",
  data() {
    return {
      text: '',
      threads: this.$store.state.threads,
      posts: this.$store.state.posts,
    };
  },
  methods:{
    save(){
      const postId = 'gggg' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now()/1000),
        threadId: this.id,
        userId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
      }
      this.$emit('save', {post}) //access under eventData.post
      // this.posts.push(post)
      // this.thread.posts.push(postId)
      this.text=''
    }
  }
}
</script>

<style scoped>

</style>
