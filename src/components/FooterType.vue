<template>
  <div style="background: #f1f1f5; width: 620px" >
    <div class="footer-main">
      <div class="part-1">
        <div class="logo">
          <img class="img-logo-end"
               src="https://inlnk.ru/Pmk4L"
               alt="logo">
        </div>
        <div class="navigation">
          <router-link
              to=""
              class="icon">
            <twitter/>
            <facebook/>
            <pinterest/>
            <print/>
            <twitter/>
            <facebook/>
            <pinterest/>
            <print/>
          </router-link>
        </div>
      </div>

      <div class="part-2">
        <div class="menu">
          <div class="menu-main">
            <span>RECENTLY</span>
          </div>
          <div class="menu-second">
            <span class="menu-second-down">cranberry pecan bread</span>
            <span class="menu-second-down">fall bliss salad</span>
            <span class="menu-second-down">old-school dinner rolls</span>
            <span class="menu-second-down">winter squash and spinach pasta bake</span>
            <span class="menu-second-down">big apple crumb cake</span>
          </div>
        </div>
      </div>

      <div class="books-img">
        <img alt="img-1" class="img-1"
             src="https://i2.wp.com/smittenkitchen.com/wp-content/uploads//2012/09/tskc-final-cover1.jpg?fit=1640%2C1876&ssl=1">
        <img alt="img-2" class="img-2"
             src="https://i2.wp.com/smittenkitchen.com/wp-content/uploads//2012/09/tskc-final-cover1.jpg?fit=1640%2C1876&ssl=1">
      </div>
    </div>
    <br>
      <div class="end-text">
        <div class="end-text-1">
        <span>
          AS AN AMAZON ASSOCIATE I EARN FROM QUALIFYING PURCHASES.
        </span>
        </div>
        <div class="end-text-2">
        <span>
          ©2009–2021 SMITTEN KITCHEN. PROUDLY POWERED BY WORDPRESS. HOSTED BY PRESSABLE.
        </span>
        </div>
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
    Twitter, Facebook, Pinterest, Print,
  },
  name: "Footer"
}
</script>

<style scoped>

.part-1 {
  cursor: pointer;
  float: left;
  width: calc(100%/3)
}
.part-2 {
  float: left;
  width: calc(100%/3);
  cursor: pointer;

}

.footer-main {
  background: #f1f1f5;
  width: 620px;
}

.logo {
  margin-bottom: 20px;


}
.img-logo-end {
  width: 90%;
}
.end-text {
  background: white;
  color: dimgrey;
  font-size: 13px;
  text-align: center;
  margin-top: 120px;
}

.end-text-1 {
  margin-bottom: 20px;
}

.end-text-2 {
  margin-bottom: 50px;
}

.icon {

}
.navigation {

  color: #50565a;
  font-family: franklin-gothic-urw-1, franklin-gothic-urw, "FranklinGothic URW", "Open Sans", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.4;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 180px;

}
.books-img {
  cursor: pointer;
}

.img-1 {
  width: calc(100%/8);
  margin-right: 15px;
  margin-left: 25px;
}
.img-2 {
  width: calc(100%/8)
}

.menu {
  text-align: left;
  float: left;
}
.menu-main {
  margin-top: 5px;
  font-size: 16px;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px dashed #6B7794;
  color: #6B7794;
  padding-bottom: 8px;
}
.menu-second-down {
  font-size: 13px;
  border-bottom: 1px dashed #d2d6de;
  color: #6B7794;
  display: block;
  padding: 8px 0;
  text-decoration: none;
}
</style>