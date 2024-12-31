const myEmail = "m.g.plunkett@gmail.com";
let email = document.getElementById("copy-email");

email.addEventListener("click", copyEmail);

function copyEmail() {
  navigator.clipboard.writeText(myEmail).then(
    () => {
      email.textContent = "copied to clipboard";
      setTimeout(() => {
        email.textContent = "email";
      }, 2000);
    },
    () => {
      console.log("failed to copy", err);
    }
  );
}
