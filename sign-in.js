import { showError, showSuccess, errorMsg, input } from "./sign-up.js";
const loginEmail = document.querySelector("#email-signin");
const loginPass = document.querySelector("#password-signin");
const signInBtn = document.querySelector("#signIn-btn");

signInBtn.addEventListener("click", () => {
  if (loginEmail.value === "") {
    showError(4, "Email can't be empty. Please fill it in.");
  } else if (loginPass.value === "") {
    showError(5, "Password can't be empty. Please fill it in.");
  } else {
    let usersArr = JSON.parse(localStorage.getItem("user"));
    console.log(usersArr);

    const emailArr = usersArr
      .map((user) => user.email)
      .includes(loginEmail.value);
    console.log(emailArr);
    const PassArr = usersArr
      .map((user) => user.password)
      .includes(loginPass.value);
    console.log(PassArr);

    if (emailArr && PassArr) {
      showSuccess(4);
      showSuccess(5);
    } else {
      showError(4, "Invalid email/ password");
      showError(5, "");
    }
  }
});
