<template>
  <div class="home">
    <h1>Posts</h1>
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
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    }
  },
  components: {
    Post,
  },
  async created() {
    const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
    this.posts = (await resp.json()).slice(0, 5)
  }
};
</script>
