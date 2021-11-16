<template>
  <div class="app" style="width: 710px;">

    <div id="nav" class="navi">
      <div class="app-logo">
        <img class="img-logo"
             src="/logo-w.png"
             alt="logo">
      </div>
      <div class="app-links" style="width: 500px">
        <h3>
          <router-link to="/main-list" class="router-link"> MAIN LIST</router-link>
          <router-link to="/main-photos" class="router-link"> Surprise me!</router-link>
          <router-link to="/post-list-ver-2" class="router-link"> Recipes</router-link>
          <router-link to="/main-list" class="router-link"> best OF</router-link>
          <router-link to="/main-list" class="router-link"> BOOKS</router-link>
          <router-link to="/main-list" class="router-link"> NEWSLETTER</router-link>
          <router-link to="/main-list">MORE</router-link>
        </h3>
      </div>
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap');
@import "./style/style.scss";
</style>
