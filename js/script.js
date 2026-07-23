// ===========================
// PASSWORD
// ===========================

const correctPassword = "buuri";

// ===========================
// GET HTML ELEMENTS
// ===========================

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockBtn");
const message = document.getElementById("message");

// ===========================
// BUTTON CLICK
// ===========================

unlockButton.addEventListener("click", function () {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

        message.style.color = "green";
        message.textContent = "Access Granted ❤️";

        setTimeout(function () {

            window.location.href = "birthday.html";

        }, 1500);

    } else {

        message.style.color = "red";
        message.textContent = "Wrong Password ❌";

    }

});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 2500);

});