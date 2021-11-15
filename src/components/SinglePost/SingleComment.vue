<template>

  <div class="single-comment">
    <div class="name"> {{ comment.name }}</div>
    <div class="email">{{ comment.email }}</div>
    <div class="body">{{ comment.body }}</div>
    <div v-if="!!comment.website">
      <div class="web">{{ comment.website }}</div>
    </div>
    <div>
      <div class="date">
        <span>
          NOVEMBER 11, 2021 AT 4:02 PM --
        </span>

        <button @click="isShow=!isShow" class="btn-reply">reply</button>
        <div class="form" v-if="isShow">
          <add-comment
              @create="addComment"
          />
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import AddComment from "@/components/SinglePost/AddComments/AddComment";

export default {
  name: "SingleComment",
  components: {AddComment},
  data() {
    return {
      isShow: false,
      website: '',
      comments: '',
    }
  },

  props: {
    comment: {
      type: Object,
      require: true,
    },


  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
  }
}
</script>

<style scoped>
.single-comment {
  color: gray;
}

.name {
  font-size: large;
  font-weight: bolder;
  margin-bottom: 10px;
  color: dimgrey;
}

.btn-reply {
  background: none;
  border: none;
  text-transform: uppercase;
  color: #6B7794;
  cursor: pointer;

}

.email {
  margin-bottom: 10px;
}

.date {
  color: #6B7794;
  font-size: 14px;
}

.body {
  margin-bottom: 10px;
}
</style>