<template>
  <div class="main-container">
    <div class="booking">
      <pre>

        Room Name: {{room.roomName}}
        Room Desc: {{room.roomDesc}}
        Room Price: {{room.roomPrice}}
        Room Spec: {{room.roomSpec}}
<!--
      room name
      room pic
      available room
      date
      room key(please send xNav to wallet xxxxxxxxxxx, memo is key)
      room price(please send Nav to wallet xxxxxxxxxxx, amount is price)
      -->
      </pre>

      <div class="picker">
        <DatePicker @emitOutside="syncDateValue"></DatePicker>
        <button
          type="submit"
          class="btn btn-primary fas fa-search"
          @click="booking"
        >
          Book!
        </button>
      </div>

      <paymentKeyComp
        :isShow="isShow"
        :paymentKey="paymentKey"
      ></paymentKeyComp>
      <img :src="room.roomUrl" :alt="room.roomAlt" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  DefineComponent,
  inject,
  onBeforeMount,
  computed,
} from "vue";
import axios from "axios";
import DatePicker from "@/components/DatePicker.vue";
import paymentKeyComp from "@/components/paymentKeyComp.vue";
import Footer from "@/components/Footer.vue";
//import router from "@/router/index.ts";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    DatePicker,
    paymentKeyComp,
    Footer,
  },
  setup() {
    const route = useRoute();
    var roomId = route.params.roomId;

    const room = ref({ roomUrl: "", roomAlt: "" });
    axios
      .post("http://localhost:8081/getRoomInfoByRoomSeq?roomSeq=" + roomId)
      .then(function (response) {
        console.log(response.data);
        room.value = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    var bookingStartDate = ref("");
    var bookingEndDate = ref("");

    const syncDateValue = (dates: any) => {
      bookingStartDate.value = dates[0];
      bookingEndDate.value = dates[1];
    };

    var isShow = ref(false);
    var paymentKey = ref("");

    const booking = () => {
      //paymentKey.value = getRandomInt(0, 10000).toString(10).padStart(4, "0");
      axios
        .post(
          "http://localhost:8081/booking?roomSeq=1&bookingStartDate=" +
            bookingStartDate.value +
            "&bookingEndDate=" +
            bookingEndDate.value
        )
        .then(function (response) {
          console.log(response.data);
          paymentKey.value = response.data;
          isShow.value = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const getRandomInt = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };

    return {
      isShow,
      paymentKey,
      booking,
      roomId,
      room,
      syncDateValue,
    };
  },
});
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container .booking {
  flex: 1;
}
</style>
