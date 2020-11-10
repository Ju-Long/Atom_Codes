export const check = (price, discount) => {
  let total = price * (1 - (discount / 100));
  console.log(Math.round(total * 100) / 100);
  if (total > 85) console.log("Free Shipping!");
  else console.log("$4 shipping cost");
}
