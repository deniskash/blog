<template>
  <div class="main-photo">


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
</template>


<script>

import axios from 'axios';


export default {
  components: {
  },
  props: {
    id: {
      type: Number,
      require: true,
    }
  },
  name: 'MainPhoto',
  data() {
    return {
      main_photos: [],
    }
  },

  methods: {
    async fetchMainPhoto() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        this.main_photos = response.data;
      } catch (e) {
        alert('Error')
      }
    }
  },

  created() {
    this.fetchMainPhoto()
  }
}


</script>

<style scoped>
.main-photo-list-img {
  width: 10%;
}

.main-photo-list {
  text-align: start;
}

</style>