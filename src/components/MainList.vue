<template>
  <div class="main-list">

<!--    <h1>Page with Posts</h1>-->
    <!--    <my-button-->
    <!--        @click="fetchPosts"-->
    <!--    >-->
    <!--      Get Posts-->
    <!--    </my-button>-->

<!--    <my-button-->
<!--        @click="showDialog"-->
<!--        style="margin: 15px 0;"-->
<!--    >-->
<!--      Create Post-->
<!--    </my-button>-->

<!--    <my-dialog  :show="dialogVisible">-->
<!--      <post-form-->
<!--          @create="createPost"-->
<!--      />-->
<!--    </my-dialog>-->

<!--    <main-photo-->
<!--        :main_photos="main_photos"-->
<!--    />-->


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
// import MainPhoto from "@/components/MainPhotos";



export default {
  components: {
    // MainPhoto,
    PostList,
    FooterType,
  },
  name: 'MainList',
  data() {
    return {
      posts: [],
      main_photos: [],
      // dialogVisible: false,
    }
  },
  methods: {
    // createPost(post) {
    //   this.posts.push(post);
    //   this.dialogVisible = false;
    // },
    // removePost(post) {
    //   this.posts = this.posts.filter(p => p.id !== post.id)
    // },
    // showDialog() {
    //   this.dialogVisible = true;
    // },

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
  font-family: sans-serif;
  box-sizing: border-box;
}
.main-list {
  padding: 5px 40px;
}
</style>