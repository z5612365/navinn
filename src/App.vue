<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/booking">Booking</router-link> |
    <router-link to="/search">Search</router-link>
    <!--
    <router-link to="/booking/${roomId}">Booking</router-link>
    -->
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Bebas+Neue&family=Caveat:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: RGB(245, 240, 235);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

<script lang="ts">
import {
  defineComponent,
  ref,
  DefineComponent,
  inject,
  getCurrentInstance,
} from "vue";

export default defineComponent({
  // mounted() {
  //   console.log('Hello World!');
  // },
  components: {},
  setup() {
    return {};
  },
});
</script>
