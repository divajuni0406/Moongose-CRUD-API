import { getCookie, eraseCookie } from "../../cookies.js";

let eleSignUp = document.querySelector("#sign-up");
let eleLogout = document.querySelector("#logout");
let username = document.querySelector("#username");
let dataUser = getCookie("username");

const loadPage = () => {
  if (dataUser !== null) {
    eleSignUp.style.display = "none";
    eleLogout.style.display = "";
    username.innerHTML = JSON.parse(dataUser);
  } else {
    eleSignUp.style.display = "";
    eleLogout.style.display = "none";
    username.innerHTML = "Your Account";
  }
};
loadPage();

logout.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      eraseCookie("username");
      window.location.href = "/login";
    }
  });
});

const playGame = () => {
  let playBtn = document.querySelector("#button-play");
  if (dataUser === null) {
    playBtn.setAttribute("href", "/login");
  } else {
    playBtn.setAttribute("href", "/gamesuit");
  }
};
playGame();
