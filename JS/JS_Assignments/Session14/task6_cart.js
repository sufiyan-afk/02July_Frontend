import getDiscountedPrice, {
    formatPrice
} from "./utils.js";

const price = 2000;
const discount = 20;

const discountedPrice = getDiscountedPrice(price, discount);

console.log("Original Price:", formatPrice(price));
console.log("Discounted Price:", formatPrice(discountedPrice));