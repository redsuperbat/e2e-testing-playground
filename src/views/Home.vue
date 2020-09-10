<template>
  <div class="home">
    <h1>Posts</h1>
    <div class="new-post">
      <h2>New post</h2>
      <input type="text" placeholder="Post title" v-model="postTitle" />
      <textarea type="text" placeholder="Post content" v-model="postBody"></textarea>
      <button class="submit-post" @click="submitPost">Submit</button>
    </div>
    <div class="posts">
      <Post
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :userId="post.userId"
        :title="post.title"
        :body="post.body"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
    }
  },
  setup() {
    // new post
    const postTitle = ref('')
    const postBody = ref('')
    const submitPost = () => {
      console.log('title', postTitle.value)
      console.log('body', postBody.value)
    }
    return {
      postTitle,
      postBody,
      submitPost,
    }
  },
  components: {
    Post,
  },
  async created() {
    const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
    this.posts = (await resp.json()).slice(0, 5)
  },
}
</script>

<style scoped lang="scss">
.new-post {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 2em;
}

input,
textarea {
  font-size: 1.2em;
  margin: 0.25em 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 0.25em;
}
textarea {
  min-height: 5em;
}
button {
  padding: 0.5em 0.25em;
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;
  background-color: #eee;
  &:hover {
    background-color: #ccc;
  }
}
</style>
