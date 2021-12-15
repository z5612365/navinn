<template>

  <div class="main-container">
    <div class="home">
      <div class="takahashi-style-group">
        <div>Safe</div>
        <div>Anonymous</div>
        <div>Untraceable</div>
      </div>
      <img src="https://static.wixstatic.com/media/f8bcfe_1b4a9d588172422baf055269750baee4~mv2.jpg/v1/fill/w_608,h_608,q_90/f8bcfe_1b4a9d588172422baf055269750baee4~mv2.webp">

      <!--
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      -->
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    HelloWorld,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container .home {
  flex: 1;
}
.takahashi-style-group {
  font-family: "Bebas Neue", cursive;
  display: flex;
  color: rgb(255, 232, 59);
  font-size: 48px;
  justify-content: center;

  text-shadow: 0 0 0.2em rgb(120, 111, 41);
}
.takahashi-style-group > div {
  padding: 20px;
}

.main-container > .home > img{
  box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.7);
}

</style>
