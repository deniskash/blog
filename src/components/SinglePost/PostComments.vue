<template>
  <div class="post-comments">

    <div>

        <div class="comments" v-for="comment in comments" :key="comment" >

          <single-comment
              :comment="comment"/>

<!--          <div><strong>name:</strong> {{ comment.name }}</div>-->
<!--          <div><strong>email:</strong> {{ comment.email }}</div>-->
<!--          <div><strong>body:</strong> {{ comment.body }}</div>-->

        </div>

      </div>

    </div>
</template>


<script>
// import axios from "axios";
import SingleComment from "@/components/SinglePost/SingleComment";

export default {
  components: {
    SingleComment
  },
  props: {
    comments: {
      type: Object,
      require: true,
    },
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
}

.post-comments{
  margin-top: -30px;
  border-top: 1px solid darkgrey;

}
</style>