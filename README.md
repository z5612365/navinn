# navinn

This project is for navcoin hackathon 2021, and developing with [navcoin-js](https://github.com/aguycalled/navcoin-js)

Navinn is a website for online booking, which is safe, anonymous and untraceable.

Related project:
* [navinn-pms-backend](https://github.com/z5612365/navinn-pms-backend): Hotel Property Management System (backend)
* [navinn-pms-frontend](https://github.com/z5612365/navinn-pms-frontend): Hotel Property Management System (frontend), and it embeds a wallet for receiving xNav
* [navinn-wallet](https://github.com/z5612365/navinn-wallet): Simple wallet for send xNav

## Booking instruction
1. Customer select room to book.
1. Navinn website show the key of selected room.
1. In xNav's memo feild, Customer send key value back with his own wallet to wallet of [navinn-pms-frontend](https://github.com/z5612365/navinn-pms-frontend).
1. Wallet of [navinn-pms-frontend](https://github.com/z5612365/navinn-pms-frontend) receive xNav with correct key of selected room, and comfirm this transaction.
1. Navinn website shows this booking transaction is comfirmed
1. Customer arrive hotel, and go get a room with room key.

## ERD
<img src="./erd/navinn.png" alt="drawing" width="550"/>
