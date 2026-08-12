// ================================
// CARRITO
// ================================

let cart = 0;

const cartCount = document.getElementById("cartCount");
const notification = document.getElementById("notification");

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;

        notification.textContent =
            `${button.dataset.game} agregado al carrito 🛒`;

        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);

    });

});


// ================================
// FAVORITOS
// ================================

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }

    });

});


// ================================
// FILTROS
// ================================

const filters = document.querySelectorAll(".filter");
const games = document.querySelectorAll(".game-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.category;

        games.forEach(game => {

            if (
                category === "todos" ||
                game.dataset.category === category
            ) {
                game.style.display = "block";
            } else {
                game.style.display = "none";
            }

        });

    });

});


// ================================
// BUSCADOR
// ================================

const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();

    let found = 0;

    games.forEach(game => {

        const name = game.dataset.name.toLowerCase();

        if (name.includes(search)) {

            game.style.display = "block";
            found++;

        } else {

            game.style.display = "none";

        }

    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});


// ================================
// MODO OSCURO / CLARO
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }

});


// ================================
// CUENTA REGRESIVA
// ================================

const countdown = document.getElementById("countdown");

const targetDate =
    new Date().getTime() + (3 * 24 * 60 * 60 * 1000);


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {

        countdown.textContent = "¡OFERTA TERMINADA!";

        return;

    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.textContent =
        `${days.toString().padStart(2, "0")} : ` +
        `${hours.toString().padStart(2, "0")} : ` +
        `${minutes.toString().padStart(2, "0")} : ` +
        `${seconds.toString().padStart(2, "0")}`;

}

setInterval(updateCountdown, 1000);

updateCountdown();


// ================================
// BOTÓN DE OFERTA
// ================================

const offerBtn = document.getElementById("offerBtn");

offerBtn.addEventListener("click", () => {

    notification.textContent =
        "¡Oferta activada! 🔥";

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2500);

});


// ================================
// FORMULARIO
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    notification.textContent =
        `¡Gracias ${name}! Mensaje enviado correctamente. 📩`;

    notification.classList.add("show");

    contactForm.reset();

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);

});