<template>
  <div>
    <h1>Page with Posts</h1>
    <button
      @click="showDialog"
    >
      Create Post
    </button>
<!--    <my-dialog v-model:show="dialogVisible">-->
    <my-dialog :show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import axios from 'axios';

export default {
  components: {
    PostList, PostForm, MyDialog
  },
  name: 'App',
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
   async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert('Error')
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
</style>
