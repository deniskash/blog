<template>
  <div class="text">
    {{posts.title}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    }
  },
  props: {
    id: {
      type: Number,
      require: true,
    }
  },

  name: "TitleBodyPost",
  methods: {
    async fetchPosts() {
      try {
        const id = this.$route.params.id -1;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.posts = response.data;

      } catch (e) {
        alert('Error')
      }
    }
  },
  created() {
    this.fetchPosts()
  }
}


</script>

<style scoped>
.text {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
</style>