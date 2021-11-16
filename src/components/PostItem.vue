<template>
  <div>
    <div class="post">
      <div class="post-item-main-photo">
        <img
            class="main-photo-list-img"
            src="https://via.placeholder.com/600/92c952"
            alt="MainPhoto in post">
        <span class="smittenkitchen-primary-category">Recipes</span>
      </div>
    </div>


    <div class="post">
      <div class="info-id-main">

        <div
            class="info-id-tittle"
            @click="$router.push(`/enter-post/${post.id}`)"
        >
          {{ post.title }}
        </div>

        <div
            class="info-id-body"
        >
          {{ post.body }}
        </div>
      </div>
      <div>

      </div>
    </div>

    <div class="post">
      <div
          class="post-item-read-more"
          @click="$router.push(`/enter-post/${post.id}`)"
      >
        READ MORE >>
      </div>
    </div>

    <div class="post">
      <div class="post-item-read-tags">
        <b>OCTOBER 14, 2021</b> 552 COMMENTSCASSEROLE,
        FALL, PASTA, RECIPES, SAVORY PROJECTS,
        SPINACH, VEGETARIAN, WINTER SQUASH
      </div>
    </div>

  </div>
</template>
<script>

export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap');

.main-photo-list-img {
  cursor: pointer;

}

.post-item-read-more {
  color: firebrick;
  font-weight: 500;
  font-size: small;
  cursor: pointer;

}

.post-item-read-tags {
  border-top: 1px dashed #d2d6de;
  width: 600px;
  text-transform: uppercase;
  color: darkgray;
  letter-spacing: 0.05em;
  text-align: start;
  font-size: small;
  padding: 16px 0;
  font-family: 'Libre Franklin', sans-serif;
}

.post-item-main-photo {
  margin-bottom: -10px;
  width: 600px;
}

.info-id-tittle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'Libre Franklin', sans-serif;
  font-size: xx-large;
  font-weight: 600;
  cursor: pointer;
  color: slategray;
  margin-top: -30px;
  width: 600px;
}

.info-id-body {
  text-align: start;
  color: gray;
  margin-top: 20px;
  width: 600px;

}

.info-id {
  text-align: start;
  font-weight: bold
}

.info-id-main {
}

.post {
  padding: 15px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.post__btns {
  display: inline-block;
  margin-right: 5px;
}

.smittenkitchen-primary-category {
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #6B7794;
  color: #fff;
  font-weight: 700;
  line-height: 1.4;
  padding: 4px 12px;
  position: absolute;
  right: 700px;
}
</style>