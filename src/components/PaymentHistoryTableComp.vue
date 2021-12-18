<template>
  <div class="payment-history-table-comp">
    <table class="table table-striped">
      <thead>
        <tr>
<!--          <th>paymentSeq</th> -->
          <th>paymentKey</th>
          <th>receiveWallet</th>
<!--           <th>refundWallet</th> -->
          <th>totalAmount(xNav)</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paymentHistory, i) in paymentHistoryList" :key="i">
<!--                    <td>{{ paymentHistory.paymentSeq }}</th> -->
          <td>{{ paymentHistory.paymentKey }}</td>
          <td>{{ paymentHistory.receiveWallet }}</td>
<!--          <td>{{ paymentHistory.refundWallet }}</td> -->
          <td>{{ paymentHistory.totalAmount }}</td>
          <td>{{ paymentHistory.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef, watch } from "vue";

export default defineComponent({
  props: {
    paymentHistoryList: Array,
  },
  setup(props, { emit }) {
    const paymentHistoryList = toRef(props, "paymentHistoryList");

    watch(paymentHistoryList, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });

    return {};
  },
});
</script>
