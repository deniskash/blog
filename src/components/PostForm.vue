<template>
<div>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-model="post.title"
        class="input_add_post"
        type="text"
        placeholder="Название"
    >
    <input
        v-model="post.body"
        @input="post.body = $event.target.value"
        class="input_add_post"
        type="text"
        placeholder="Описание"
    >
<!--    <my-button-->
<!--        class="btn"-->
<!--        @click="createPost"-->
<!--    >-->
<!--      Create Post-->
<!--    </my-button>-->

    <button
        class="btn"
        @click="createPost"
    >
      Create Post
    </button>
  </form>
</div>
</template>

<script>
export default {
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

</style>