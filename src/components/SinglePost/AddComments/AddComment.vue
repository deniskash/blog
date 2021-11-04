<template>
  <div class="add-comment">
    <form @submit.prevent>
      <div class="add-comment-title">
      <h4>Add Comment</h4>
      </div>
      <div class="add-comment-placeholder">
      <my-input
          v-model="comment.name"
          type="text"
          placeholder="Your name"
      />

      <my-input
          v-model="comment.body"
          type="text"
          placeholder="Comment"
      />
      <my-input
          v-model="comment.email"
          type="text"
          placeholder='Your email'
      />
      </div>
<div class="add-comment-button">
      <my-button-add-comment
          style="align-self: flex-end"
          @click="addComment"
      >

        Add Comment
      </my-button-add-comment>
</div>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButtonAddComment from "@/components/UI/MyButtonAddComment";
export default {
  components: {
    MyButtonAddComment,
    MyInput,
  },
  name: "AddComment",
  data() {
    return {
      comment: {
        title: '',
        body:'',
      }
    }
  },
  methods: {
    addComment() {
      this.comment.id = Date.now();
      this.$emit('create', this.comment)
      this.comment = {
        title:'',
        body:'',
      }
    }
  }
}
</script>

<style scoped>

.add-comment {
}

.add-comment-title {
  margin-bottom: -25px;
}

 .add-comment-button {
   margin-top: auto;
 }


</style>