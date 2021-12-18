<template>
  <div class="main-container">
    <div class="instruction">
      <pre>
Instruction:
1. Booking in Booking page
2. Remember your [Payment Key]
3. Go to Search page, search with [Payment Key]
4. Check all booking info is correct, the booking status would be "UNPAID"
5. Go to your personal xNav wallet
6. Pay [Total Amount] xNav to [Receive Wallet], and input [Payment Key] to the txn memo field
7. Go back to Search page, and the booking status would be "PAID"</pre
      >
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  components: {},
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
.main-container .instruction {
  flex: 1;
}

.main-container .instruction pre {
  //font-family: 'Abel', sans-serif;
  font-family: "Life Savers", cursive;
  display: flex;
  justify-content: center;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 25px;
  color: rgb(59, 52, 28);
  padding: 50px;
}
</style>
