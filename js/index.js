// About function
const ab = document.getElementById("about");

ab.onclick = () => {
    alert("Webpad Beta 1.0\nMade by Neutrovertido - 2020");
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
    var userInput = document.getElementById("tbox").value;
    var fileName = document.getElementById("name").value;
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(userInput));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    body.appendChild(element);

    element.click();

    body.removeChild(element);
}