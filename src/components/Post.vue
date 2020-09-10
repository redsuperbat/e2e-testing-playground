<template>
  <div class="post">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <p class="post-id">{{ id }}</p>
    </div>
    <p class="body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ['userId', 'id', 'title', 'body'],
}
</script>

<style lang="scss" scoped>
.post {
  margin: 1em;
  padding: 1em;
  background-color: #f9f9f9;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);
  text-align: left;
}
.header {
  display: flex;
  justify-content: space-between;
}
</style>
