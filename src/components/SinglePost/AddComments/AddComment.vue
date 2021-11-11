<template>
  <div class="add-comment">
    <form @submit.prevent>
      <div class="add-comment-title">
        <h4 class="comment"> Comment</h4>
      </div>
      <div class="add-comment-placeholder">
        <my-input
            required
            class="comment-body"
            v-model="comment.body"
            type="text"
        />
        <h4 class="comment"> Name *</h4>
        <my-input
            required
            class="input-comment"
            v-model="comment.name"
            type="text"
        />
        <h4 class="comment"> Email *</h4>
        <my-input
            required
            class="input-comment"
            v-model="comment.email"
            type="text"
        />

        <h4 class="comment"> WEBSITE </h4>
        <my-input class="input-comment"

            v-model="comment.website"
            type="text"
        />
      </div>

      <div class="checkbox">
        <label class=input-checkbox>
          <input
              type="checkbox"
          >
          SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I COMMENT.
        </label>
        <div class="question-check-out">
          <span>
            New here? You might want to check out the comment guidelines before chiming in.
          </span>
        </div>
        <label class=input-checkbox>
          <input
              type="checkbox"
          >
          I MADE THIS
        </label>
        <label class=input-checkbox>
          <input
              type="checkbox"
          >
          I HAVE A QUESTION
        </label>

        <label class="last-checkbox">
          <input
              class="input-last-checkbox"
              type="checkbox"
          >
          NOTIFY ME OF FOLLOW-UP COMMENTS BY EMAIL.
        </label>
      </div>
      <div class="add-comment-button">
        <my-button-add-comment
            style="align-self: flex-end"
            @click="addComment"
        >
          Post Comment
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
        body: '',

      }
    }
  },
  methods: {
    addComment() {
      this.comment.id = Date.now();
      this.$emit('create', this.comment)
      this.comment = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
.input-last-checkbox {
  margin-top: 25px;
  margin-bottom: 30px;
}

.question-check-out{
  margin-top: 20px;
  margin-bottom: 8px;
  padding: 4px;
  text-transform: none;
  font-size: medium;
}

.input-checkbox {
  display: block;
}
.checkbox {
  margin-top: 20px;
  font-size: smaller;
  color: #50565a;
}

.input-comment {
}
.comment-body {
  width: 100%;
  height: 200px;
  margin-top: 28px;
}

.comment {
  font-weight: normal;
  font-size: smaller;
  margin-bottom: 2px;
  color: gray;

}

.add-comment {
  width: 600px;
  text-transform: uppercase;
  font-weight: normal;
}

.add-comment-title {
  margin-bottom: -25px;
}

.add-comment-button {
  margin-top: auto;
}

.add-comment-placeholder {
  min-width: 370px;
}
</style>