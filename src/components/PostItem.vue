<template>
  <div>
    <div class="post">
      <div class="post-item-main-photo">
        <img
            class="main-photo-list-img"
            src="https://via.placeholder.com/600/92c952"
            alt="MainPhoto in post">
      </div>
      </div>


    <div class="post">
       <div class="info-id-main">
<!--        <div class="info-id">{{ post.id }}</div>-->

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



<!--        <div class="post__btns">-->
<!--          <my-button-->
<!--             @click="$router.push(`/enter-post/${post.id}`)"-->
<!--          >-->
<!--            Enter Post-->
<!--          </my-button>-->
<!--        </div>-->
<!--        <div class="post__btns">-->

<!--          <my-button-->
<!--              @click="$emit('remove', post)"-->
<!--          >-->
<!--            Delete-->
<!--          </my-button>-->
<!--        </div>-->
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

// import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    // MyButton
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.main-photo-list-img {
  cursor: pointer;

}
.post-item-read-more {
  width: 600px;
  text-align: start;
  color: firebrick;
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
  font-family: franklin-gothic-urw-1, franklin-gothic-urw, "FranklinGothic URW", "Open Sans", Arial, sans-serif;
}

.post-item-main-photo {
  margin-bottom: -10px;
  width: 600px;
}

.info-id-tittle {
  vertical-align: inherit;
  text-align: start;
  font-size: xx-large;
  font-weight: bold;
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
</style>