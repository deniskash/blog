<template>
<div>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{post.title}}</div>
<!--      <div><strong>Описание:</strong> {{post.body}}</div>-->
    </div>
    <div>
    <div class="post__btns">
      <my-button>
        Open
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