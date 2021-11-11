<template>

  <div>
     <strong>name:</strong> {{ comment.name }}
     <strong>email:</strong> {{ comment.email }}
     <strong>body:</strong> {{ comment.body }}

      <button @click="isShow=!isShow">reply</button>

    <div class="form" v-if="isShow">
      <add-comment/>
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
    }
  },

  props: {
    comment: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>