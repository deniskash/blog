<template>
  <div>

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

      <div class="enter-post-info-after">
        <info-after-post/>
      </div>

      <div class="enter-post-add-comment">
        <add-comment
            @create="addComment"
        />
      </div>

      <div  class="enter-post-comments">
        <post-comments
            :comments="comments"
        >
        </post-comments>
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
import InfoAfterPost from "@/components/SinglePost/InfoAfterPost";

export default {
  name: "EnterPost",
  components: {InfoAfterPost, AddComment, PostComments, BodyPost, PostPhoto},
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

  watch: {
    id(){
      this.loadPostInformation()

    },
  },

  created(){
    this.loadPostInformation()
  },

  methods: {
    loadPostInformation() {
      this.fetchPhoto(this.id)
      this.fetchComments(this.id)
      this.fetchBodyPost(this.id)
    },


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

<style lang="scss" scoped>


@import "./style/style.scss";



</style>