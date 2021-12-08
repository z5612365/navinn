<template>
  <div v-if="isShow" class="paymentSeqComp">
    <p>{{ paymentSeq }}</p>
  </div>

</template>

<script lang="ts">
import { defineComponent, toRef, watch } from "vue";
export default defineComponent({
  name: "alertDialog",
  props: {
    isShow: Boolean,
    paymentSeq: String,
  },
  setup(props, { emit }) {
    const isShow = toRef(props, "isShow");
    const paymentSeq = toRef(props, "paymentSeq");
    const closeDialog = () => {
      emit("show", false, paymentSeq.value);
    };

    watch(isShow, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });
    watch(paymentSeq, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });

    return {
      closeDialog,
    };
  },
});
</script>
