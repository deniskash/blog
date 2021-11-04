<template>
  <div>
    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>

    <div class="enter-post">

      <div class="enter-post-photo">
        <post-photo
            :photos="photos"
        >
        </post-photo>
      </div>

      <div class="enter-post-body-post">
        <body-post
            :body_post="body_post"
        >
        </body-post>
      </div>

      <div  class="enter-post-comments">
        <post-comments
            :comments="comments"
        >
        </post-comments>
      </div>

      <div class="enter-post-add-comment">
        <add-comment
            @create="addComment"
        />
      </div>

    </div>

  </div>
</template>

<script>

import axios from "axios";

import PostPhoto from "@/components/SinglePost/PostPhoto";
import BodyPost from "@/components/SinglePost/BodyPost";
import PostComments from "@/components/SinglePost/PostComments";
import AddComment from "@/components/SinglePost/AddComments/AddComment";
export default {
  name: "EnterPost",
  components: {AddComment, PostComments, BodyPost, PostPhoto},
  props: {
    id: {
      type: Number,
      require: true,
    }
  },

  data() {
    return {
      photos: [],
      comments: [],
      body_post: [],
    }
  },

  created(){
    this.fetchPhoto(this.id)
    this.fetchComments(this.id)
    this.fetchBodyPost(this.id)

  },

  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },

    async fetchPhoto(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        this.photos = response.data;
      } catch (e) {
        alert('Error')
      }
    },
    async fetchComments(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        this.comments = response.data;
      } catch (e) {
        alert('Error')
      }
    },
    async fetchBodyPost(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.body_post = response.data;
      } catch (e) {
        alert('Error')
      }
    },
  },

}

</script>

<style scoped>

.enter-post {
  /*text-align: start;*/
  /*font-family: sans-serif;*/
  /*box-sizing: border-box;*/
  /*padding: 15px;*/
  /*border: 2px solid teal;*/
  /*margin-top: 15px;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
}
.enter-post-add-comment {
  text-align: start;
  font-family: sans-serif;
  padding: 15px;
  /*border: 1px solid gray;*/
  width:50%;
  border-style: outset;
  margin-top: 40px;
}

.enter-post {
  box-sizing: border-box;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 30px;

}

.enter-post-photo {
}

.enter-post-body-post {
  margin-top: 30px;
  font-family: sans-serif;
  font-size: x-large;
}
.enter-post-comments {
  margin-top: 30px;
  font-family: sans-serif;
  text-align: start;
  /*border: 1px solid gray;*/
}


</style>