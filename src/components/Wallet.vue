<template>
  <div>
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
    // const closeDialog = () => {
    //   console.log(njs);
    // };

    return {
      closeDialog,
    };
  },
});
</script>
