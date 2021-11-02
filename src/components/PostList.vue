<template>
  <div>
    <div v-if="posts.length > 0">
      <h3>Posts List</h3>
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </div>
      <h2 v-else style="color: firebrick">
        Post List Empty
      </h2>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      require: true,
    }
  }
}
</script>

<style scoped>

</style>