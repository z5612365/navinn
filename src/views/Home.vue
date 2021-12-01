<template>
  <div class="home">

    <div class="takahashi-style-group">
      <div>Safe</div>
      <div>Anonymous</div>
      <div>Untraceable</div>
    </div>
    <!--
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    -->
    <Footer msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    HelloWorld,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.takahashi-style-group{
    display: flex;
    color:rgb(232, 210, 65);
    font-size: 40px;
    justify-content: center;
}
.takahashi-style-group > div{
    padding: 20px;
}
</style>
