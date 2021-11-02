<template>
  <div class="main-list">

    <h1>Page with Posts</h1>
    <my-button
        @click="fetchPosts"
    >
      Get Posts
    </my-button>

    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Create Post
      </my-button>

      <my-dialog  :show="dialogVisible">
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
    name: 'MainList',
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
    // mounted() {
    //   this.fetchPosts();
    // }
  }
</script>

<style scoped>
  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .main-list {
    padding: 5px 40px;
  }
</style>