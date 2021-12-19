<template>
  <div class="main-container">
    <div class="instruction">
      <pre>
Customer should remember their [Payment Key].
It's the key for customer payment, and is your room key when you want to access in yor room.

Instruction:

    BOOK:
        1. [navinn > Booking page]: Booking it! (Book date will not avialable to pick if another booked earlier)
        2. [navinn > Booking page]: Remember your [Payment Key]
        3. [navinn > Search page]: Search with [Payment Key] for payment details
        4. [navinn > Search page]: Check all booking info is correct, the booking status would be "UNPAID"
        5. [navinn > History page]: (Optional)Press refresh button, get hotel's all booking info

    PAY:
        1. [navinn-wallet(just for test)/or your personal xNav wallet that can create txn with memo]
        2. [navinn-wallet(just for test)]: Input paymentKey xNavAmount
            [navinn-wallet > paymentKey]: [navinn > Search page > Total Amount]
            [navinn-wallet > xNavAmount]: [[navinn > Search page > Receive Wallet])
        3. [navinn > Search page]: Back to Search page or History page
            , and search again, booking status would be "PAID"</pre
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
  //font-family: "Life Savers", cursive;
  display: flex;
  justify-content: center;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 16px;
  color: rgb(59, 52, 28);
  padding: 50px;
}
</style>
