<template>
  <div>
    <div class="post">

      <div class="info-id-main">
        <div class="info-id">{{ post.id }}</div>
        <div><strong>Title:</strong> {{ post.title }}</div>
      </div>

      <div>

        <div class="post__btns">
          <my-button
             @click="$router.push(`/enter-post/${post.id}`)"
          >
            Enter Post
          </my-button>
        </div>
        <div class="post__btns">

          <my-button
              @click="$emit('remove', post)"
          >
            Delete
          </my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.info-id {
  text-align: start;
  font-weight: bold
}

.info-id-main {
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: inline-block;
  margin-right: 5px;
}

</style>