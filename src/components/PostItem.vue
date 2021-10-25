<template>
<div>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{post.title}}</div>
      <div><strong>Описание:</strong> {{post.body}}</div>
    </div>
    <div class="post__btns">
<!--      <my-button>Delete</my-button>-->
      <button
          @click="$emit('remove', post)"
      >
        Delete
      </button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>