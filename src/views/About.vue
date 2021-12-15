<template>
  <div class="main-container">
    <div class="about">
      <pre>
Navinn offers a safe, anonymous and untraceable place to live, 
giving back control of people's privacy.

Customer should have right for holding their own data. 

As many people know, 
paparazzi can cause huge society problem no matter what country you live in,
and no one can ensure the hotel won't sell your booking info to paparazzi secretely, 
especially celebrities.

So, if you want a safe place to rest.
This is just for you.</pre
      >
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  inject,
  getCurrentInstance,
  onMounted,
  nextTick,
} from "vue";

import Footer from "@/components/Footer.vue";
export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container .about {
  flex: 1;
}

.main-container .about pre {
  //font-family: 'Abel', sans-serif;
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: center;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 28px;
  color: rgb(59, 52, 28);
  padding: 50px;
}
</style>
