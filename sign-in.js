import { showError, showSuccess, input } from "./sign-up.js";
const loginEmail = document.querySelector("#email-signin");
const loginPass = document.querySelector("#password-signin");
const signInBtn = document.querySelector("#signIn-btn");
const forgotPassBtn = document.querySelector("#forgot-pass");
const signInForm = document.querySelector("#signIn-form");

let usersArr = JSON.parse(localStorage.getItem("user"));
console.log(usersArr);

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginEmail.value === "") {
    showError(4, "Email can't be empty. Please fill it in.");
  } else if (loginPass.value === "") {
    showError(5, "Password can't be empty. Please fill it in.");
  } else {
    let userFound = false;
    usersArr.map((user) => {
      if (
        user.email === loginEmail.value &&
        user.password === loginPass.value
      ) {
        userFound = true;
        showSuccess(4);
        showSuccess(5);
        setTimeout(() => {
          alert(`Sign in Successful. Welcome ${user.userName.toUpperCase()}!`);
          input.forEach((item) => (item.style.border = "none"));
          signInForm.reset();
        }, 1000);
      }
    });
    if (!userFound) {
      showError(4, "Invalid email or password");
      showError(5, "Invalid email or password");
    }
  }
});

forgotPassBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginEmail.value === "") return;

  usersArr.map((user) => {
    if (user.email === loginEmail.value) {
      alert(`Password is ${user.password} dumbhead!`);
    }
  });
});
