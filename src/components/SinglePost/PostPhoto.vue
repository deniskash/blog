<template>
  <div>
    <div>
      <div class="photo">
        <img :src="photos.url" alt="Photo in post">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    photos: {
      type: Object,
      require: true,
    }
  }
}
</script>

<style scoped>
.photo {
  width: 600px;
  text-align: start;
}
</style>