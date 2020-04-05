// About function
const ab = document.getElementById("about");

ab.onclick = () => {
    alert("Webpad b0.1\nMade by Neutrovertido - 2020");
}

// Theme function
const th = document.getElementById("theme");
const body = document.body;
let currentTheme = body.classList;
let cacheTheme = localStorage.getItem("webth");

if (cacheTheme === "dark") {
    body.classList.replace("light", "dark");
}

th.onclick = () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("webth", "dark");
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("webth", "light");
    }
}

// Save function
const sb = document.getElementById("ward");

sb.onclick = () => {
    alert("Someday it will eventualy work");
}