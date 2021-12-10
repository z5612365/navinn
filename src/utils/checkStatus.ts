const ENC_HEX = "hex";

export function checkPaymentStatus(str: string): boolean {
  return str === "0000" ? true : false;
}
