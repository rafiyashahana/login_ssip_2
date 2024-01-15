const username = document.querySelector("#name-signup");
const email = document.querySelector("#email-signup");
const password = document.querySelector("#password-signup");
const cpassword = document.querySelector("#cpassword-signup");
const signUpBtn = document.querySelector("#sign-up-btn");
const errorMsg = document.querySelectorAll(".error-msg");
const input = document.querySelectorAll("input");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  validateUser();
  validateEmail();
};

const validateUser = () => {
  if (username.value === "") {
    showError(0, "Username can't be empty");
  } else if (username.value.length < 3 || username.value.length > 15) {
    showError(0, "Username must be between 3 and 15 characters");
  } else {
    showSuccess(0);
    // localStorage.setItem("username", username.value);
  }
};
const validateEmail = () => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.value == "") {
    showError(1, "Email can't be empty");
  } else if (!email.value.match(re)) {
    showError(1, "Enter a valid email");
  } else {
    showSuccess(1);
  }
};

const showError = (i, msg) => {
  errorMsg[i].style.display = "block";
  errorMsg[i].innerHTML = msg;
  input[i].style.border = " solid #ff7777";
};
const showSuccess = (i) => {
  errorMsg[i].style.display = "none";
  input[i].style.border = " solid #71BC78";
};
