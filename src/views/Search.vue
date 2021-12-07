<template>
  <div class="search">
    <passwordTextToggleComp></passwordTextToggleComp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent, inject } from "vue";
import axios from "axios";
import passwordTextToggleComp from '@/components/PasswordTextToggleComp.vue';
export default defineComponent({
  components: {
    passwordTextToggleComp
  },
  setup() {
    return { };
  },
});
</script>

<style scoped lang="scss">


</style>
