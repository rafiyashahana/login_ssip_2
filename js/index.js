const signInLink = document.querySelector("#signIn-link");
const signUpLink = document.querySelector("#signUp-link");
const signInBox = document.querySelector(".form-box-signIn");

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "flex";
  refreshPage();
});
signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "none";
});
function refreshPage() {
  window.location.reload();
}
