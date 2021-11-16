<template>
  <div class="post-comments">
    <div>
      <div class="comments" v-for="comment in comments" :key="comment">

        <single-comment
            :comment="comment"/>
      </div>
    </div>
  </div>
</template>


<script>
import SingleComment from "@/components/SinglePost/SingleComment";

export default {
  components: {
    SingleComment
  },
  props: {
    comments: {
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

.post-comments {
  margin-top: -30px;
  border-top: 1px solid darkgrey;
}
</style>