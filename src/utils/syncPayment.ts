import axios from "axios";

export async function getCumulativePaymentAmountByPaymentKey(
  wallet: any,
  history: any,
  paymentKey: string
): Promise<number> {
  let cumulativeAmount = 0;
  let found = false;
  console.log(`history ${JSON.stringify(history)}`);

  for (const index in history) {
    const memo = history[index].memos.out[0];
    console.log("history[index].memos.out: " + memo);
    console.log("history[index].memos.out: " + typeof memo);
    console.log("paymentKey: " + paymentKey);
    console.log("paymentKey: " + typeof paymentKey);
    if (memo !== paymentKey) {
      continue;
    }
    found = true;
    cumulativeAmount += history[index].amount;
    console.log("amount: " + history[index].amount);

    // console.log("memos: " + JSON.stringify(history[index].memos.out));
    // console.log("txn: " + history[index].amount);
  }
  if (found === false) {
    cumulativeAmount = 0;
  }
  return new Promise<number>((resolve, reject) => {
    //resolve(history.data.success);
    resolve(cumulativeAmount / 1e8);
    // Or reject() if something wrong happened
    reject(0);
  });
}

export async function syncPaymentStatus(
  wallet: any,
  history: any,
  paymentKey: string,
  totalAmount: number,
  status: string
) {
  console.log("======= syncPayment ===============");
  getCumulativePaymentAmountByPaymentKey(wallet, history, paymentKey)
    .then((success) => {
      if (status === "UNPAID" && success > totalAmount) {
        //UPDATE
        axios
          .post("http://localhost:8081/updatePaymentStatusToPaid?" + paymentKey)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })
    .catch((fail) => {
      console.log(fail);
    });
}
/*
export function refreshPaymentHistory(wallet: any) {
  axios
    .post("http://localhost:8081/getPaymentHistory")
    .then(function (response) {
      const paymentHistoryList = response.data;

      for (const index in paymentHistoryList) {
        console.log(
          "****************paymentHistoryList: " + index + " *************"
        );
        syncPayment(
          wallet,
          paymentHistoryList[index].paymentKey,
          paymentHistoryList[index].totalAmount
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}*/

/*
  <td>{{ paymentHistory.paymentKey }}</td>
  <td>{{ paymentHistory.receiveWallet }}</td>
<!--          <td>{{ paymentHistory.refundWallet }}</td> -->
  <td>{{ paymentHistory.totalAmount }}</td>
  <td>{{ paymentHistory.status }}</td>
  */
