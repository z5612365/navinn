<template>
  <div class="main-container">
    <div class="history">
      <button
        type="submit"
        class="btn btn-primary"
        @click="refreshPaymentHistory"
      >
        <font-awesome-icon :icon="['fa', 'sync']" />
      </button>

      <paymentHistoryTableComp
        :paymentHistoryList="paymentHistoryList"
      ></paymentHistoryTableComp>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  inject,
  getCurrentInstance,
  onMounted,
  nextTick,
} from "vue";
import axios from "axios";

import Footer from "@/components/Footer.vue";

import paymentHistoryTableComp from "@/components/PaymentHistoryTableComp.vue";
import {
  syncPaymentStatus,
  getCumulativePaymentAmountByPaymentKey,
} from "@/utils/syncPayment";

import { getHistory } from "@/utils/checkStatus";

export default defineComponent({
  components: {
    Footer,
    paymentHistoryTableComp,
  },
  setup() {
    const internalInstance = getCurrentInstance();

    var paymentHistoryList = ref();
    const refreshPaymentHistory = () => {
      axios
        .post("http://localhost:8081/getPaymentHistory")
        .then(function (response) {
          paymentHistoryList.value = response.data;

          if (internalInstance != null) {
            const history = getHistory(
              internalInstance.appContext.config.globalProperties.$wallet
            )
              .then((success) => {
                const historyJson = JSON.parse(success);

                for (const index in paymentHistoryList.value) {
                  getCumulativePaymentAmountByPaymentKey(
                    internalInstance.appContext.config.globalProperties.$wallet,
                    historyJson,
                    paymentHistoryList.value[index].paymentKey
                  )
                    .then((success) => {
                      if (
                        paymentHistoryList.value[index].status === "UNPAID" &&
                        success >= paymentHistoryList.value[index].totalAmount
                      ) {
                        paymentHistoryList.value[index].status = "PAID";
                      }
                    })
                    .catch((fail) => {
                      console.log(fail);
                    });
                }
              })
              .catch((fail) => {
                console.log(fail);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return { paymentHistoryList, refreshPaymentHistory };
  },
});
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container .history {
  flex: 1;
}
</style>
