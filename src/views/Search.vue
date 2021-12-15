<template>
  <div class="main-container">
    <div class="search">
      <passwordTextToggleComp></passwordTextToggleComp>
      <tableComp
        :roomSeq="roomSeq"
        :paymentSeq="paymentSeq"
        :room="room"
        :roomPrice="roomPrice"
        :roomStatus="roomStatus"
      ></tableComp>
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
    </div>
    <Footer/>
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
import {
  checkPaymentStatus,
  getBalance,
  getHistory,
} from "@/utils/checkStatus";
import tableComp from "@/components/TableComp.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    passwordTextToggleComp,
    tableComp,
    Footer,
  },
  setup() {
    const internalInstance = getCurrentInstance();
    
    var roomSeq = ref("99999");
    var paymentSeq = ref("123456789");
    var room = ref("Fancy");
    var roomPrice = ref("1000");
    var roomStatus = ref("");

    if (internalInstance != null) {
      // roomStatus = ref(checkPaymentStatus(internalInstance.appContext.config.globalProperties.$wallet
      // ,"0000"));

      checkPaymentStatus(
        internalInstance.appContext.config.globalProperties.$wallet,
        "0000"
      )
        .then((success) => {
          roomStatus.value = success;
          console.log(success);
        })
        .catch((fail) => {
          console.log(fail);
        });
    }

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

    return {
      getBalanceClick,
      getHistoryClick,
      roomSeq,
      paymentSeq,
      room,
      roomPrice,
      roomStatus,
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
