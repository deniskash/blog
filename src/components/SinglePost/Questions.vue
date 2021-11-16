<!--Я добавил сюда просто аксиос-коменты, но с id+1, чтобы они были разные.-->
<template>
  <div class="post-comments">

    <div>
      <div class="comments" v-for="question in question" :key="question">

        <div>
          <strong>name:</strong> {{ question.name }}
          <strong>email:</strong> {{ question.email }}
          <strong>body:</strong> {{ question.body }}1
          <div v-if="!!question.website">
            <strong>WEBSITE:</strong> {{ question.website }}
          </div>
          <button @click="isShow=!isShow">reply</button>
          <div class="form" v-if="isShow">
            <add-comment/>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<script>
import AddComment from "@/components/SinglePost/AddComments/AddComment";

export default {

  components: {
    AddComment
  },
  props: {
    question: {
      type: Object,
      require: true,
    }
  },
}
</script>


<style scoped>

.comments {
  padding: 15px;
  margin-top: 15px;
}

.post-comments-h4 {
  margin-top: 5px;
}
</style>