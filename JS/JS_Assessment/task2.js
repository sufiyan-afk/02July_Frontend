const dishes = [
    {
        name: "Paneer Tikka",
        price: 180,
        category: "Food",
        isVegetarian: true
    },
    {
        name: "Chicken Biryani",
        price: 250,
        category: "Food",
        isVegetarian: false
    },
    {
        name: "Veg Burger",
        price: 150,
        category: "Food",
        isVegetarian: true
    },
    {
        name: "Masala Dosa",
        price: 120,
        category: "Food",
        isVegetarian: true
    },
    {
        name: "Cold Coffee",
        price: 100,
        category: "Beverage",
        isVegetarian: true
    },
    {
        name: "Chicken Wings",
        price: 220,
        category: "Food",
        isVegetarian: false
    }
];

// Filter vegetarian dishes
const vegetarianDishes = dishes.filter(
    dish => dish.isVegetarian
);

// Map formatted menu
const formattedMenu = dishes.map(
    dish => `${dish.name} – Rs ${dish.price}`
);

// Reduce total price
const totalPrice = dishes.reduce(
    (total, dish) => total + dish.price,
    0
);

console.log("Vegetarian Dishes:", vegetarianDishes);

console.log(
    "Count of Vegetarian Dishes:",
    vegetarianDishes.length
);

console.log(
    "Formatted Menu:",
    formattedMenu
);

console.log(
    "Total Price:",
    `Rs ${totalPrice}`
);