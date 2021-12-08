import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faEyeSlash, faEye);


// eslint-disable-next-line @typescript-eslint/no-var-requires
const njs = require('navcoin-js');

const walletFile = undefined; // File name of the wallet database, persistence using dexie db backend only works on the browser
const password = undefined; // Password used to encrypt and open the wallet database
const spendingPassword = undefined; // Password used to send transactions
const mnemonic = undefined; // Mnemonic to import 'problem shrimp bottom mouse canyon moment dirt beyond cage hazard phrase animal';
const type = undefined; // Wallet type next, navcoin-core or navcoin-js-v1
const zapwallettxes = false; // Should the wallet be cleared of its history?
const log = true; // Log to console
const network = "testnet";
njs.wallet.Init().then(async () => {
    const wallet = new njs.wallet.WalletFile({
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
});


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).use(ElementPlus).mount('#app')
