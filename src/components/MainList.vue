<template>
  <div class="main-list">
    <post-list
        :posts="posts"
    >
    </post-list>

    <footer-type></footer-type>
  </div>
</template>


<script>

import PostList from "@/components/PostList";
import axios from 'axios';
import FooterType from "@/components/FooterType";


export default {
  components: {
    PostList,
    FooterType,
  },
  name: 'MainList',
  data() {
    return {
      posts: [],
      main_photos: [],
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert('Error')
      }
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>

<style scoped>
* {
  font-family: 'Libre Franklin', sans-serif;
  box-sizing: border-box;
}

.main-list {
  padding: 0 49px;
}
</style>