<template>
  <div class="main-container">
    <div class="search">
      <passwordTextToggleComp
        @emitOutside="syncDateValue"
      ></passwordTextToggleComp>
      <tableComp
        :roomName="roomName"
        :roomPrice="roomPrice"
        :bookStartDate="bookStartDate"
        :bookEndDate="bookEndDate"
        :paymentKey="paymentKey"
        :receiveWallet="receiveWallet"
        :totalAmount="totalAmount"
        :status="status"
        :cumulativePaymentAmount="cumulativePaymentAmount"
      ></tableComp>
      <!--
      <button
        type="submit"
        class="btn btn-primary fas fa-search"
        @click="getBalanceClick"
      >
        <font-awesome-icon :icon="['fa', 'search']" />getBalance
      </button>
      <button
        type="submit"
        class="btn btn-primary fas fa-search"
        @click="getHistoryClick"
      >
        <font-awesome-icon :icon="['fa', 'search']" />getHistory
      </button>
      -->
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
  getCurrentInstance,
} from "vue";
import axios from "axios";
import passwordTextToggleComp from "@/components/PasswordTextToggleComp.vue";
import { getBalance, getHistory } from "@/utils/checkStatus";
import tableComp from "@/components/TableComp.vue";
import Footer from "@/components/Footer.vue";
import { getCumulativePaymentAmountByPaymentKey } from "@/utils/syncPayment";

export default defineComponent({
  components: {
    passwordTextToggleComp,
    tableComp,
    Footer,
  },
  setup() {
    const internalInstance = getCurrentInstance();

    var roomName = ref("");
    var roomPrice = ref("");
    var bookStartDate = ref("");
    var bookEndDate = ref("");
    var paymentKey = ref("");
    var receiveWallet = ref("");
    var totalAmount = ref();
    var cumulativePaymentAmount = ref();
    var status = ref("");
    console.log("internalInstance " + internalInstance);

    const getBalanceClick = () => {
      if (internalInstance != null) {
        // const balance = getBalance(internalInstance.appContext.config.globalProperties.$wallet);
        // //var balance_ = JSON.parse(balance);

        getBalance(internalInstance.appContext.config.globalProperties.$wallet)
          .then((success) => {
            console.log(success);
          })
          .catch((fail) => {
            console.log(fail);
          });
      }
    };
    const getHistoryClick = () => {
      if (internalInstance != null) {
        const history = getHistory(
          internalInstance.appContext.config.globalProperties.$wallet
        )
          .then((success) => {
            console.log(success);
            const success_json = JSON.parse(success);
            console.log(success_json[0].memos);
            console.log(success_json[0].amount);
          })
          .catch((fail) => {
            console.log(fail);
          });
      }
    };
    const syncDateValue = (bookingInfoDo: any) => {
      if (internalInstance != null) {
        const history = getHistory(
          internalInstance.appContext.config.globalProperties.$wallet
        )
          .then((success) => {
            //console.log(success);
            const historyJson = JSON.parse(success);
            getCumulativePaymentAmountByPaymentKey(
              internalInstance.appContext.config.globalProperties.$wallet,
              historyJson,
              paymentKey.value
            )
              .then((success) => {
                cumulativePaymentAmount.value = success;
                if (
                  status.value === "UNPAID" &&
                  cumulativePaymentAmount.value >= totalAmount.value
                ) {
                  status.value = "PAID";
                }
              })
              .catch((fail) => {
                console.log(fail);
              });
          })
          .catch((fail) => {
            console.log(fail);
          });
      }
      //console.log("bookingInfoDo "+bookingInfoDo.toString);
      roomName.value = bookingInfoDo.roomName;
      roomPrice.value = bookingInfoDo.roomPrice;
      bookStartDate.value = bookingInfoDo.bookStartDate;
      bookEndDate.value = bookingInfoDo.bookEndDate;
      paymentKey.value = bookingInfoDo.paymentKey;
      receiveWallet.value = bookingInfoDo.receiveWallet;
      totalAmount.value = bookingInfoDo.totalAmount;
      status.value = bookingInfoDo.status;
    };
    return {
      getBalanceClick,
      getHistoryClick,
      syncDateValue,
      roomName,
      roomPrice,
      bookStartDate,
      bookEndDate,
      paymentKey,
      receiveWallet,
      totalAmount,
      status,
      cumulativePaymentAmount,
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
.main-container .search {
  flex: 1;
}
</style>
