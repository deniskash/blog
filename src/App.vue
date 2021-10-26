<template>
  <div class="app">
    <h1>Page with Posts</h1>
    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Create Post
    </my-button>
    <my-dialog  :show.sync="dialogVisible">
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
import MyButton from "@/components/UI/MyButton";
import MyDialog from "@/components/UI/MyDialog";
import axios from 'axios';


export default {
  components: {
    PostList, PostForm, MyDialog, MyButton,
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
      this.dialogVisible = false;
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
  //   document.addEventListener('click', (e) => {
  //     console.log(e.target.className)
  //     if (e.toElement.className !== 'select-input') {
  //       //comm
  //     }
  //   })
  }
}
</script>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}
.app {
  padding: 5px 40px;
}
</style>

