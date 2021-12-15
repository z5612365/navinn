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
        <tr v-for="(sale, i) in sales" :key="i">
          <th scope="row">{{ sale.name }}</th>
          <td>{{ sale.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef } from "vue";

export default defineComponent({
  props: {
    roomSeq: String,
    paymentSeq: String,
    room: String,
    roomPrice: String,
    roomStatus: String,
  },
  setup(props, { emit }) {
    const roomSeq = toRef(props, "roomSeq");
    const paymentSeq = toRef(props, "paymentSeq");
    const room = toRef(props, "room");
    const roomPrice = toRef(props, "roomPrice");
    const roomStatus = toRef(props, "roomStatus");
    var sales = reactive([
      { name: "Room Sequence", value: roomSeq },
      { name: "Payment Sequence", value: paymentSeq },
      { name: "Room", value: room },
      { name: "Price", value: roomPrice },
      { name: "Status", value: roomStatus },
    ]);

    return { sales };
  },
});
</script>
