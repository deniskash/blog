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
      <div class="calc-comments">
        <span>
        {{ comments.length }}
          COMMENTS ON
        </span>
        <h2>
          <title-body-post
              :posts="posts"
          >
          </title-body-post>
        </h2>
      </div>

      <div class="btn-comments">
        <button class="button-comments" @click="visible1">all comments</button>
        <button class="button-comments" @click="visible2">questions</button>
      </div>

      <div class="comments-and-questions">
        <div class="enter-post-comments" v-if="visible1">
          <post-comments
              :comments="comments"
          >
          </post-comments>
        </div>

        <div class="question" v-else-if="visible2">
          <questions
              :question="question"
          >
          </questions>
        </div>
      </div>

    </div>
    <footer-type></footer-type>

  </div>
</template>

<script>

import axios from "axios";

import PostPhoto from "@/components/SinglePost/PostPhoto";
import BodyPost from "@/components/SinglePost/BodyPost";
import PostComments from "@/components/SinglePost/PostComments";
import AddComment from "@/components/SinglePost/AddComments/AddComment";
import InfoAfterPost from "@/components/SinglePost/InfoAfterPost";
import TitleBodyPost from "@/components/SinglePost/TitleBodyPost";
import Questions from "@/components/SinglePost/Questions";
import FooterType from "@/components/FooterType";

export default {
  name: "EnterPost",
  components: {
    InfoAfterPost,
    AddComment,
    PostComments,
    BodyPost,
    PostPhoto,
    TitleBodyPost,
    Questions,
    FooterType,
  },
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
      posts: [],
      question:[],
      visible1: true,
      visible2: false,
    }
  },

  watch: {
    id() {
      this.loadPostInformation()

    },
  },

  created() {
    this.loadPostInformation()
  },

  methods: {
    loadPostInformation() {
      this.fetchPhoto(this.id)
      this.fetchComments(this.id)
      this.fetchBodyPost(this.id)
      this.fetchPosts(this.id)
      this.fetchQuestion(this.id+1)
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
    async fetchQuestion(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        this.question = response.data;
      } catch (e) {
        alert('Error')
      }
    },
    async fetchPosts(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.posts = response.data;
      } catch (e) {
        alert('Error')
      }
    },
  },
}

</script>

<style lang="scss" scoped>
.comments-and-questions {

}

.button-comments {
  background: #f1f1f5;
  color: #6B7794;
  border: 1px solid #6B7794;
  cursor: pointer;
  border-bottom: none;
  display: inline-block;
  padding: 8px 15px;
  text-transform: uppercase;
  margin-right: 3px;
  margin-bottom: -1px;

}
.calc-comments {
  text-align: center;
  text-transform: uppercase;
  color: #50565a;
}

@import "./style/style.scss";


</style>