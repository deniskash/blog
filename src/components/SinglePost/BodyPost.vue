<template>
  <div>

    <div class="body-post">

      <div class="body-post-title">
        <div>{{ body_post.title }}</div>
      </div>

      <div class="body-post-small-info">
        <p>
          OCTOBER 7, 2021 JUMP TO RECIPE, COMMENTS
        </p>
      </div>

      <div class="body-post-body">
        <div>{{ body_post.body }}</div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  props: {
    body_post: {
      type: Object,
      require: true,
    }
  },
}
</script>

<style scoped>

</style>