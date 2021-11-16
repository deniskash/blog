<template>
  <div class="post-list-ver-2">

    <div>
      <div
          class="main-photo-list"
          v-for="main_photo in main_photos"
          :key="main_photo"
      >

        <img
            class="main-photo-list-img"
            :src="main_photo.url"
            alt="MainPhoto in post">
      </div>
    </div>

    <div>
      <div
          class="main-posts-list"
          v-for="post in posts"
          :key="post"
      >
        {{ post.body }}
      </div>
    </div>


  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'PostsListVer2',
  data() {
    return {
      mains: [],
      main_photos: [],
      posts: [],
      main_arrays: {
        main_photos: [],
        posts: [],
      },
    }
  },

  methods: {

    async fetchMainPhoto() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        this.main_photos = response.data
        console.log(this.main_photos)
      } catch (e) {
        alert('Error')
      }
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
        console.log(this.posts)
      } catch (e) {
        alert('Error')
      }
    },
  },

  created() {
    this.fetchPosts()
    this.fetchMainPhoto()

  },
}

</script>

<style scoped>
.main-photo-list-img {
  width: 10%;
}

.main-photo-list {
  text-align: start;
}


.main-posts-list {
  margin-top: 10px;
}

</style>






