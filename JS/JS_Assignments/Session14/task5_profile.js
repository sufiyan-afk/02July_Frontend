import formatFollowers from "./instaHelpers.js";

const users = [
    { name: "Rahul", followers: 1200 },
    { name: "Amit", followers: 2500000 },
    { name: "Sufiyan", followers: 850 }
];

users.forEach(user => {
    console.log(
        `${user.name}: ${formatFollowers(user.followers)} followers`
    );
});