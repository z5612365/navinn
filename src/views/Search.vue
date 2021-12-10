<template>
  <div class="search">
    <passwordTextToggleComp></passwordTextToggleComp>
    <tableComp></tableComp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent, inject } from "vue";
import axios from "axios";
import passwordTextToggleComp from '@/components/PasswordTextToggleComp.vue';
import { checkPaymentStatus } from "@/utils/checkStatus";
import tableComp from '@/components/TableComp.vue';

export default defineComponent({
  components: {
    passwordTextToggleComp,
    tableComp,
  },
  setup() {

    console.log(checkPaymentStatus("0000"));
    console.log(checkPaymentStatus("1234"));

    return { };
  },
});
</script>

<style scoped lang="scss">


</style>
