<template>

  <div>
    {{body}}
  </div>

</template>


<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: Number,
      require: true,
    }
  },
  created(){
    this.fetchPost(this.id)
  },

  methods: {
    async fetchPost(id) {
      console.log(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        this.post = response.data;
        console.log(this.post)
      } catch (e) {
        alert('Error')
      }
    }
  },

  data() {
    return {
      post: [],
    }
  },
}
</script>


<style scoped>

</style>