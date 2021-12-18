<template>
  <div class="table-comp">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>name</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in dataList" :key="i">
          <th scope="row">{{ data.name }}</th>
          <td>{{ data.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef } from "vue";

export default defineComponent({
  props: {
    roomName: String,
    roomPrice: String,
    bookStartDate: String,
    bookEndDate: String,
    paymentKey: String,
    receiveWallet: String,
    totalAmount: Number,
    cumulativePaymentAmount: Number,
    status: String,
  },
  setup(props, { emit }) {
    const roomName = toRef(props, "roomName");
    const roomPrice = toRef(props, "roomPrice");
    const bookStartDate = toRef(props, "bookStartDate");
    const bookEndDate = toRef(props, "bookEndDate");
    //const paymentKey = toRef(props, "paymentKey");
    const receiveWallet = toRef(props, "receiveWallet");
    const totalAmount = toRef(props, "totalAmount");
    const cumulativePaymentAmount = toRef(props, "cumulativePaymentAmount");
    const status = toRef(props, "status");

    var dataList = reactive([
      { name: "Room Name", value: roomName },
      { name: "Each Room Price(xNav)", value: roomPrice },
      { name: "Book Start Date", value: bookStartDate },
      { name: "Book End Date", value: bookEndDate },
      //{ name: "Payment Key", value: paymentKey },
      { name: "Receive Wallet", value: receiveWallet },
      { name: "Total Amount(xNav)", value: totalAmount },
      { name: "Cumulative Payment Amount", value: cumulativePaymentAmount },
      { name: "Status", value: status },
    ]);

    return { dataList };
  },
});
</script>
