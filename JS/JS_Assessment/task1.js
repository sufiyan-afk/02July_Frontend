const restaurantName = "Spice Garden";
const cuisineType = "Indian";
const averageRating = 4.5;
const isOpen = true;

const status = isOpen ? "Open Now" : "Closed";

const profile = `${restaurantName} | ${cuisineType} | Rating: ${averageRating} | ${status}`;

console.log(profile);

const restaurantDetails = {
    name: restaurantName,
    cuisine: cuisineType,
    rating: averageRating,
    isOpen: isOpen
};

const jsonData = JSON.stringify(restaurantDetails);

console.log(jsonData);