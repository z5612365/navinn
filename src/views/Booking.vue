<template>
  <div class="booking">
    <h1>This is an booking page</h1>
    <pre>
    room name
    room pic
    available room
    date
    room key(please send xNav to wallet xxxxxxxxxxx, memo is key)
    room price(please send Nav to wallet xxxxxxxxxxx, amount is price)

    </pre>
    <DatePicker></DatePicker>
    <button type="submit" class="btn btn-primary fas fa-search" @click="getRoomInfo"></button>

    <PaymentSeqComp :isShow="isShow" :paymentSeq="paymentSeq" ></PaymentSeqComp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent, inject } from "vue";
import axios from "axios";
import DatePicker from '@/components/DatePicker.vue';
import PaymentSeqComp from '@/components/PaymentSeqComp.vue';
export default defineComponent({
  components: {
    DatePicker,
    PaymentSeqComp,
  },
  setup() {
    var isShow = ref(false);
    var paymentSeq = ref("Default error message!");
    const showAlertDialog = (flag:boolean, msg:string) => {
      isShow.value = flag;
      paymentSeq.value = msg;
    }
    const getRoomInfo = () => {
      paymentSeq.value='123';
      showAlertDialog(true, paymentSeq.value);
    };
    return { isShow, paymentSeq, showAlertDialog, getRoomInfo };
  },
});
</script>

<style scoped lang="scss">
</style>
