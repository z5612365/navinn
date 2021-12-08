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
    <button type="submit" class="btn btn-primary fas fa-search" @click="getRoomInfo"><font-awesome-icon :icon="['fa', 'search']" /></button>

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
    var paymentSeq = ref("");
    const showAlertDialog = (flag:boolean, msg:string) => {
      isShow.value = flag;
      paymentSeq.value = msg;
    }
    const getRoomInfo = () => {
      paymentSeq.value=getRandomInt(0, 10000).toString(10).padStart(4, "0");
      showAlertDialog(true, paymentSeq.value);
    };
    const getRandomInt = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    return { isShow, paymentSeq, showAlertDialog, getRoomInfo };
  },
});
</script>

<style scoped lang="scss">
</style>
