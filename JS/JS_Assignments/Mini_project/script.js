let links = JSON.parse(localStorage.getItem("myLinks")) || [];

const form = document.getElementById("linkForm");
const linkName = document.getElementById("linkName");
const linkUrl = document.getElementById("linkUrl");
const errorMessage = document.getElementById("errorMessage");
const linksContainer = document.getElementById("linksContainer");
const themeBtn = document.getElementById("themeBtn");


// ==============================
// Save links to LocalStorage
// ==============================

function saveLinks() {
    localStorage.setItem("myLinks", JSON.stringify(links));
}


// ==============================
// Validate URL
// ==============================

function validateURL(url) {

    return (
        url.startsWith("https://") &&
        url.includes(".")
    );
}


// ==============================
// Display Links
// ==============================

function displayLinks() {

    linksContainer.innerHTML = "";

    links.forEach(function(link, index) {

        const card = document.createElement("div");

        card.className = "link-card";

        card.innerHTML = `
            <strong>${link.name}</strong>

            <a href="${link.url}" target="_blank">
                ${link.url}
            </a>

            <button onclick="editLink(${index})">
                Edit
            </button>

            <button onclick="deleteLink(${index})">
                Delete
            </button>
        `;

        linksContainer.appendChild(card);
    });
}


// ==============================
// Add Link
// ==============================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = linkName.value.trim();
    const url = linkUrl.value.trim();

    errorMessage.textContent = "";

    if (!name) {
        errorMessage.textContent = "Link name is required.";
        return;
    }

    if (!validateURL(url)) {
        errorMessage.textContent =
            "Please enter a valid HTTPS URL.";
        return;
    }

    const newLink = {
        name: name,
        url: url
    };

    links.push(newLink);

    saveLinks();

    displayLinks();

    form.reset();
});


// ==============================
// Delete Link
// ==============================

function deleteLink(index) {

    links.splice(index, 1);

    saveLinks();

    displayLinks();
}


// ==============================
// Edit Link
// ==============================

function editLink(index) {

    const link = links[index];

    linkName.value = link.name;
    linkUrl.value = link.url;

    links.splice(index, 1);

    saveLinks();

    displayLinks();
}


// ==============================
// Theme Toggle
// ==============================

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const theme =
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

    localStorage.setItem("theme", theme);

    updateThemeButton();
}


function updateThemeButton() {

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}


themeBtn.addEventListener("click", toggleTheme);


// ==============================
// Load Saved Theme
// ==============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();


// ==============================
// Load Saved Links
// ==============================

displayLinks();