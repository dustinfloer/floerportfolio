document.addEventListener("DOMContentLoaded", function (event) {
    navbarFixedTopAnimation();
  });

document.addEventListener("DOMContentLoaded", function (event) {
    navActivePage();
    scrollRevelation('.reveal');
  });

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("https://dustinfloer.github.io/floerportfolio/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};