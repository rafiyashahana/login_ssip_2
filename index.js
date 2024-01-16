const signInLink = document.querySelector("#signIn-link");
const signUpLink = document.querySelector("#signUp-link");
const signInBox = document.querySelector(".form-box-signIn");

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "flex";
});
signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "none";
});
