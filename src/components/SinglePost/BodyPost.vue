<template>
  <div>

    <div class="body-post">

        <div><strong>Title:</strong> {{ body_post.body }}</div>

    </div>

  </div>
</template>

<script>
// import axios from "axios";

export default {
  props: {
    body_post: {
      type: Object,
      require: true,
    },
    // id: {
    //   type: Number,
    //   require: true,
    // }
  },

  created(){
    // this.fetchBodyPost(this.id)
  },

  methods: {
    // async fetchBodyPost(id) {
    //   // console.log(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //   try {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     this.body_post = response.data;
    //     // console.log(this.body_post)
    //   } catch (e) {
    //     alert('Error')
    //   }
    // }
  },

  data() {
    return {
      // body_post: [],
    }
  },
}
</script>

<style scoped>


/*.body-post {*/
/*  text-align: start;*/
/*  font-family: sans-serif;*/
/*  box-sizing: border-box;*/
/*  padding: 15px;*/
/*  border: 2px solid teal;*/
/*  margin-top: 15px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: space-between;*/
/*}*/


</style>