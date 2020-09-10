<template>
  <div class="home">
    <h1>Posts</h1>
    <div class="new-post">
      <h2>New post</h2>
      <input id="title-input" type="text" placeholder="Post title" v-model="postTitle" />
      <textarea id="body-input" placeholder="Post content" v-model="postBody"></textarea>
      <button id="submit-input" class="submit-post" @click="submitPost">Submit</button>
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
    return {}
  },
  setup() {
    // new post
    const postTitle = ref('')
    const postBody = ref('')
    const posts = ref([])

    const fetchPosts = async () => {
      const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
      posts.value = (await resp.json()).slice(0, 5)
      console.log(posts.value)
    }
    fetchPosts()

    const submitPost = () => {
      console.log('title', postTitle.value)
      console.log('body', postBody.value)
      console.log(posts.value)
      posts.value.push({
        title: postTitle,
        body: postBody,
        id: posts.value[posts.value.length - 1].id + 1,
        userId: 0,
      })
    }
    return {
      posts,
      postTitle,
      postBody,
      submitPost,
    }
  },
  components: {
    Post,
  },
  async created() {},
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
