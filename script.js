import url from "./config.js";

const hamMenu = document.getElementById("ham-menu");

hamMenu.addEventListener("click", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("nav-toggle");
});

const navLinks = document.getElementById("nav__links");

navLinks.addEventListener("click", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("nav-toggle");
});

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(url, {
    method: "post",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);


