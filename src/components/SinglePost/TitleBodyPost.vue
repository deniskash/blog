<template>
  <div class="text">
    {{ posts.title }}
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
    }
  },
}
</script>

<style scoped>

</style>