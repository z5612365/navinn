<template>
  <div v-if="isShow" class="paymentKeyComp">
    <p>Payment key: {{ paymentKey }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, watch } from "vue";
export default defineComponent({
  props: {
    isShow: Boolean,
    paymentKey: String,
  },
  setup(props, { emit }) {
    const isShow = toRef(props, "isShow");
    const paymentKey = toRef(props, "paymentKey");

    watch(isShow, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });
    watch(paymentKey, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });

    return {};
  },
});
</script>
