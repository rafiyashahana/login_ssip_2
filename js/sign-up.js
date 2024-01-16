const username = document.querySelector("#name-signup");
const email = document.querySelector("#email-signup");
const pass = document.querySelector("#password-signup");
const cpass = document.querySelector("#cpassword-signup");
const signUpBtn = document.querySelector("#sign-up-btn");
const signUpForm = document.querySelector("#signUp-form");
export const errorMsg = document.querySelectorAll(".error-msg");
export const input = document.querySelectorAll("input");

const addUserData = () => {
  let user = {
    userName: username.value,
    email: email.value,
    password: cpass.value,
  };
  let userData = JSON.parse(localStorage.getItem("user")) || [];
  userData.push(user);
  localStorage.setItem("user", JSON.stringify(userData));
};

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  validateUser();
  validateEmail();
  validatePass();
};

const validateUser = () => {
  if (username.value === "") {
    showError(0, "Username can't be empty. Please fill it in.");
    return;
  } else if (username.value.length < 3 || username.value.length > 15) {
    showError(0, "Username must be between 3 and 15 characters");
    return;
  } else {
    showSuccess(0);
  }
};
const validateEmail = () => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.value == "") {
    showError(1, "Email can't be empty. Please fill it in.");
    return;
  } else if (!email.value.match(re)) {
    showError(1, "Enter a valid email");
    return;
  } else {
    showSuccess(1);
  }
};

const validatePass = () => {
  if (pass.value == "" && cpass.value == "") {
    showError(2, "Password can't be empty. Please fill it in.");
    showError(3, "Confirm password can't be empty. Please fill it in.");
    return;
  } else if (pass.value.length < 8 || pass.value.length > 15) {
    showError(2, "Password must be between 8 and 15 characters");
    showError(3, "");
    return;
  } else {
    showSuccess(2);
    confirmPass();
  }
};

const confirmPass = () => {
  if (cpass.value !== pass.value) {
    showError(3, "Passwords do not match");
    return;
  } else {
    showSuccess(3);
    showSuccess(2);
    addUserData();
  }
  setTimeout(() => {
    alert("Sign Up Successful");
    input.forEach((item) => (item.style.border = "none"));
    signUpForm.reset();
  }, 1000);
};
export const showError = (i, msg) => {
  errorMsg[i].style.display = "block";
  errorMsg[i].innerHTML = msg;
  input[i].style.border = " solid #ff7777";
};
export const showSuccess = (i) => {
  errorMsg[i].style.display = "none";
  input[i].style.border = " solid #71BC78";
};
