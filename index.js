const button = document.getElementById("signInButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button.addEventListener("click", function () {
  const enteredEmail = email.value.trim();
  const enteredPassword = password.value;

  if (emailRegex.test(enteredEmail)) {
    email.style.borderColor = "green";
  } else {
    email.style.borderColor = "red";
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%])[a-zA-Z@#%\d]{10,}$/;
  if (passwordRegex.test(enteredPassword)) {
    if (/\d/.test(enteredPassword)) {
      password.style.borderColor = "green";
    } else {
      password.style.borderColor = "yellow";
    }
  } else {
    password.style.borderColor = "red";
  }
  if (
    email.style.borderColor === "green" &&
    password.style.borderColor === "green"
  ) {
    email.value = "";
    password.value = "";
  }
});
