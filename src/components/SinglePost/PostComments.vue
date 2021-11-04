<template>
  <div>

    <div>
      <h4>
        Comments
      </h4>

        <div class="comments" v-for="comment in comments" :key="comment">
<!--          <div><strong>postId:</strong> {{ comment.postId }}</div>-->
<!--          <div><strong>id:</strong> {{ comment.id }}</div>-->
          <div><strong>name:</strong> {{ comment.name }}</div>
          <div><strong>email:</strong> {{ comment.email }}</div>
          <div><strong>body:</strong> {{ comment.body }}</div>
        </div>
      </div>

    </div>
</template>


<script>
// import axios from "axios";

export default {
  props: {
    comments: {
      type: Object,
      require: true,
    }
    // id: {
    //   type: Number,
    //   require: true,
    // }
  },

  created(){
    // this.fetchComments(this.id)
  },

  methods: {
    // async fetchComments(id) {
    //   // console.log(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    //   try {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    //     this.comments = response.data;
    //     // console.log(this.post)
    //   } catch (e) {
    //     alert('Error')
    //   }
    // }
  },

  data() {
    return {
      // comments: [],
    }
  },
}
</script>


<style scoped>
.comments {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid gray;
}
</style>