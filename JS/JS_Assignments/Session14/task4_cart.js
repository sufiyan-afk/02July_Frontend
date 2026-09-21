import {
    formatPrice,
    getDiscountedPrice
} from "./utils.js";

const items = [
    { name: "T-Shirt", price: 1000, discount: 10 },
    { name: "Shoes", price: 2500, discount: 20 },
    { name: "Jeans", price: 1800, discount: 15 }
];

items.forEach(item => {
    const discountedPrice = getDiscountedPrice(
        item.price,
        item.discount
    );

    console.log(item.name);
    console.log("Original:", formatPrice(item.price));
    console.log("Discounted:", formatPrice(discountedPrice));
});