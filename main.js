const btnLogin = document.querySelector("[data-js=btnLogin]");

const userEmail = document.querySelector("[data-js=userEmail]");
const userPassword = document.querySelector("[data-js=userPassword]");
const inputs = document.querySelectorAll("input");

btnLogin.addEventListener("click", () => validateUser());

function validateUser() {
  const userCorrect = "admin@admin.com";
  const passwordCorrect = "admin";
  const userEmail = document.querySelector("[data-js=userEmail]");
  const userPassword = document.querySelector("[data-js=userPassword]");

  if (userEmail.value != userCorrect) {
    const inputEmail = document.querySelector("[data-js=inputEmail]");
    inputEmail.classList.add("c-input--error");
    return;
  } else if (userPassword.value != passwordCorrect) {
    const inputPassword = document.querySelector("[data-js=passwordInput");
    inputPassword.classList.add("c-input--error");
    return;
  }
  userEmail.value = "";
  userPassword.value = "";
  alert("Login com sucesso");
}

inputs.forEach((e) => e.addEventListener("focus", () => clearError()));

function clearError() {
  const errorClass = document.querySelectorAll(".c-input");

  errorClass.forEach((e) => {
    let errorExist = e.classList.contains("c-input--error");
    if (errorExist) {
      e.classList.remove("c-input--error");
    }
  });
}
