<template>
<div>
  <div>
<!--    <div class="photo" v-for="photo in photos" :key="photo">-->
    <div class="photo" >

      <img :src="photos.url" alt="Photo in post">

<!--      <div><strong>title:</strong> {{ photos.title }}</div>-->
<!--      <div><strong>id:</strong> {{ photos.id }}</div>-->
<!--      <div><strong>url:</strong> {{ photos.url }}</div>-->
<!--      <div><strong>albumId:</strong> {{ photos.albumId }}</div>-->
<!--      <div><strong>thumbnailUrl:</strong> {{ photos.thumbnailUrl }}</div>-->

    </div>

  </div>
</div>
</template>

<script>
// import axios from "axios";

export default {
  props: {
    photos: {
      type: Object,
      require: true,
    },
    // id: {
    //   type: Number,
    //   require: true,
    // }
  },

  created(){
    // this.fetchPhoto(this.id)
  },

  methods: {
    // async fetchPhoto(id) {
    //   // console.log(`https://jsonplaceholder.typicode.com/photos/${id}`);
    //   try {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    //     this.photos = response.data;
    //     console.log(this.photos)
    //   } catch (e) {
    //     alert('Error')
    //   }
    // }
  },

  data() {
    return {
      // photos: [],

    }
  },
}
</script>


<style scoped>

/*.photo {*/
/*  padding: 15px;*/
/*  border: 2px solid teal;*/
/*  margin-top: 15px;*/
/*  text-align: start;*/
/*  justify-content: space-between;*/
/*}*/

</style>