import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueLoading from "vue-loading-overlay";
//import "vue-loading-overlay/dist/vue-loading.css";

let loader: any = null;
function hideLoader() {
  // destroy previous
  if (loader) {
    loader.hide();
    loader = null;
  }
}

function showLoader() {
  hideLoader();
  loader = app.config.globalProperties.$loading.show({});
}

router.afterEach((to, from) => {
  if (to.name === "Booking") {
    setTimeout(() => {
      hideLoader();
    }, 850);
  } else if (to.name === "About") {
    setTimeout(() => {
      hideLoader();
    }, 250);
  } else {
    setTimeout(() => {
      hideLoader();
    }, 150);
  }
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    showLoader();
  }
  next();
});

import { loadWallet, getBalance } from "@/utils/checkStatus";

library.add(faSearch, faEyeSlash, faEye, faFacebook);

interface IWalletHistory {
  wallettxid: string;
  amount: number;
  type: string;
  confirmed: boolean;
  height: number;
  pos: number;
  timestamp: number;
  memos: string[];
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const njs = require("navcoin-js");

const walletFile = "wallet_dev"; // File name of the wallet database, persistence using dexie db backend only works on the browser
const password = undefined; // Password used to encrypt and open the wallet database
const spendingPassword = undefined; // Password used to send transactions
const mnemonic =
  "depth ignore moral reflect run neither favorite saddle future flower poverty feel"; // Mnemonic to import 'problem shrimp bottom mouse canyon moment dirt beyond cage hazard phrase animal';
const type = "navcoin-js-v1"; // Wallet type next, navcoin-core or navcoin-js-v1
const zapwallettxes = false; // Should the wallet be cleared of its history?
const log = true; // Log to console
const network = "testnet";

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(VueLoading);
let wallet = undefined;
njs.wallet.Init().then(async () => {
  wallet = await new njs.wallet.WalletFile({
    file: walletFile,
    mnemonic: mnemonic,
    type: type,
    password: password,
    spendingPassword: spendingPassword,
    zapwallettxes: zapwallettxes,
    log: log,
    network: network,
  });
  console.log(`library initialised`);

  loadWallet(wallet, njs);
  console.log(`getBalance`);
  //getBalance(wallet);
  app.config.globalProperties.$wallet = wallet;
});
app.mount("#app");
