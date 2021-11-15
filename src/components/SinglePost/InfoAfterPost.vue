<template>
  <div class="info-after-post">
    <div>
      <div class="info-after-post-offer">
        <p>You might also like:</p>
      </div>
    </div>

    <div class="info-after-post-photos">

      <div class="info-after-post-photo">
        <img class="info-after-post-photoMain" src="https://inlnk.ru/MjzNB" alt="Photo end post">
        <p class="info-after-post-photo-text">blueberry crumb cake</p>
      </div>

      <div class="info-after-post-photo">
        <img class="info-after-post-photoMain" src="https://inlnk.ru/MjzNB" alt="Photo end post">
        <p class="info-after-post-photo-text">blueberry crumb cake</p>
      </div>

      <div class="info-after-post-photo">
        <img class="info-after-post-photoMain" src="https://inlnk.ru/MjzNB" alt="Photo end post">
        <p class="info-after-post-photo-text">blueberry crumb cake</p>
      </div>

    </div>

    <div class="main-info-text-level-one">
        <span class="info-text-one">See more:
          <router-link to="/post-list-ver-2">APPLE</router-link>,
          <router-link to="/post-list-ver-2">Cake</router-link>,
          <router-link to="/post-list-ver-2">EveryDay</router-link>,
          <router-link to="/post-list-ver-2">Cakes</router-link>,
          <router-link to="/post-list-ver-2">Fall</router-link>,
          <router-link to="/post-list-ver-2">Recipes</router-link>
        </span>
    </div>

    <div>
      <div class="main-info-text-level-two">
        <span class="info-text">DO MORE:
          <router-link to="" class="icon"><twitter/><facebook/><pinterest/><print/></router-link>
        </span>
      </div>
    </div>

    <div>
      <div class="like-post">
        <h2>Like this post? Subscribe for more!</h2>
      </div>
    </div>

    <div class="subscribe">
      <div class="place-for-email">
        <input
            class="place-for-email-input"
            type="text"
            placeholder="email address"
        />
      </div>
      <div class="btn-subscribe">
        <button class="btn-sub">
          subscribe
        </button>
      </div>
    </div>

    <div class="another-post">
      <div class="left-post" v-if="Number(this.$route.params.id) > 1">
        <router-link
            class="text-left-post"
            :to="`/enter-post/${beforePostId}`"
        >
          LEFT POST
        </router-link>
      </div>

      <div class="right-post">
        <router-link
            class="text-right-post"
            :to="`/enter-post/${nextPostId}`"
        >
          right-post
        </router-link>
      </div>

    </div>

    <div class="reply">
      <h2>Leave a Reply</h2>
    </div>

    <div class="not-published">
         <span>Your email address will not be published. Required fields are marked *
      </span>
    </div>

  </div>
</template>
<script>
import Twitter from "@/assets/Icons/Twitter";
import Facebook from "@/assets/Icons/Facebook";
import Pinterest from "@/assets/Icons/Pinterest";
import Print from "@/assets/Icons/Print";

export default {
  components: {
    Print,
    Pinterest,
    Facebook,
    Twitter
  },
  computed: {
    nextPostId() {
      return Number(this.$route.params.id) + 1
    },
    beforePostId() {
      return Number(this.$route.params.id) - 1
    },
  },

  name: "InfoAfterPost",
  data() {
    return {
      posts: [],
    }
  },

}
</script>

<style lang="scss" scoped>
.not-published {
  color: dimgrey;
}
.reply {
  text-align: center;
  margin-top: 100px;
  h2 {
    font-family: madre-script-1, madre-script, "Madre Script", "Open Sans", Arial, sans-serif;
    color: slategray;
  }
}

.another-post {
  display: flex;
  font-size: smaller;
  margin-top: 25px;
  .right-post{
    margin-left: auto;
  }
}

.icon {
  color: slategray;
}

.subscribe {
  overflow: hidden;
  white-space: nowrap;
  height: 50px;
}

.place-for-email {
  height: 100%;
  float: left;
}

.place-for-email-input {
  font-size: unset;
  height: 100%;
  width: 300px;
  color: #50565a;
  padding: 0.5em;
  border: 1px solid #939a9f;
  margin-right: 10px;

}

.btn-subscribe {
  height: 100%;
  float: left;

}

.btn-sub {
  height: 100%;
  cursor: pointer;
  background: repeating-linear-gradient(45deg, #f0f1f4, #f0f1f4 1px, white 1px, white 6px);
  text-transform: uppercase;
  border: 1px solid #a6adbf;
  color: #6B7794;
  font-weight: bold;
  padding: 15px;
  width: 150px;
  box-sizing: border-box;

}


.info-after-post {
  width: 600px;
}

.info-after-post-photos {
  align-items: start;
}

.like-post {
  text-align: center;

  h2 {
    font-family: madre-script-1, madre-script, "Madre Script", "Open Sans", Arial, sans-serif;
    color: slategray;
  }
}

.main-info-text-level-one {
  margin-top: 40px;
}

.main-info-text-level-two {
  margin-top: 10px;
}

.info-text {
  text-transform: uppercase;
  font-size: smaller;
}

.info-text-level-one {
}

.info-text-one {
  border-top: 1px dashed #d2d6de;
  text-transform: uppercase;
  font-size: smaller;
  padding: 16px 0;
}

.info-after-post-offer {
  margin-top: 40px;
  font-size: 9pt;
  text-align: start;
  font-weight: bold;
  width: 19%;
  color: slategray;
  border-top: 1px solid #d2d6de;
}

.info-after-post-photoMain {
  display: table;
  align-items: start;
  width: 200px;
  margin-right: 10px;
  /*height: 100px;*/
}

.info-after-post-photos {
}


.info-after-post-photo {
  align-items: start;
  display: table-cell;
}

.info-after-post-photo-text {
  text-align: start;
  margin-top: unset;
  color: firebrick;
  font-size: smaller;
}
</style>