const signUpForm = document.querySelector("#signUp-form");
const signUpBtn = document.querySelector("#sign-up-btn");
const errorMsg = document.querySelector(".error-msg");
const signInLink = document.querySelector("#signIn-link");
const signUpLink = document.querySelector("#signUp-link");
const signInBox = document.querySelector(".form-box-signIn");
const requiredFields = signUpForm.querySelectorAll("[required]");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  requiredFields.forEach((el) => {
    const errEl = el.parentNode.lastElementChild;
    const fieldName = el.getAttribute("name");
    if (el.value.trim() == "" || null) {
      errEl.style.display = "block";
      errEl.innerHTML = `${fieldName} can't be empty. Please fill it in.`;
    } else if (el.name === "Email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!el.value.match(emailRegex)) {
        errEl.style.display = "block";
        errEl.innerHTML = `Enter a valid email address.`;
      }
    } else {
      signUpForm.reset();
      alert("Sign up successful");
    }
  });
});

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "flex";
});

signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  signInBox.style.display = "none";
});
