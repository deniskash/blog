<template>
  <div>
    <form @submit.prevent>
      <h4>Create Post</h4>
      <my-input
          v-model="post.title"
          type="text"
          placeholder="Название"
      />
      <my-input
          v-model="post.body"
          type="text"
          placeholder="Описание"
      />
      <my-button
          style="align-self: flex-end"
          @click="createPost"
      >
        Create Post
      </my-button>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {
    MyInput,
    MyButton
  },
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body:'',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title:'',
        body:'',
      }
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}
</style>