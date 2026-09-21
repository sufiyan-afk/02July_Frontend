import {
    formatSongTitle,
    getSongDurationInMinutes
} from "./spotifyUtils.js";

const songTitle = "shape of you";
const duration = 233;

console.log("Song:", formatSongTitle(songTitle));
console.log("Duration:", getSongDurationInMinutes(duration));