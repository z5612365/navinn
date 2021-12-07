<template>
  <div class="search">

    <DatePicker></DatePicker>
    <passwordTextToggleComp></passwordTextToggleComp>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent, inject } from "vue";
import axios from "axios";
import DatePicker from '@/components/DatePicker.vue';
import passwordTextToggleComp from '@/components/passwordTextToggleComp.vue';
export default defineComponent({
  components: {
    DatePicker,
    passwordTextToggleComp
  
  },
  setup() {
    return { };
  },
});
</script>

<style scoped lang="scss">


</style>
