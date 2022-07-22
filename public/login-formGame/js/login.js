import { setCookie } from "../../cookies.js";

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then(async (result) => {
      if (result.statusCode === 200) {
        await Swal.fire({
          position: "top-center",
          icon: "success",
          title: `welcome ${result.resultData.username}`,
          showConfirmButton: false,
          timer: 2000,
        });

        setCookie("username", JSON.stringify(result.resultData.username), 1);
        return (window.location.href = "/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Samething Wrong in Server, Please Call IT",
      });
    });
});
