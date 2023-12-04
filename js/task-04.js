const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email !== "" && password !== "") {
    alert("Your registration is successful!");
    const login = {
      email,
      password,
    };
    console.log(login);
    form.reset();
  } else {
    alert("All form fields must be filled in!");
  }
}
