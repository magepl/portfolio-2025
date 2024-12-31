const myEmail = "m.g.plunkett@gmail.com";
let email = document.getElementById("copy-email");

email.addEventListener("click", copyEmail);

function copyEmail() {
  navigator.clipboard.writeText(myEmail).then(
    () => {
      console.log("copied to clipboard");
    },
    () => {
      console.log("failed to copy", err);
    }
  );
}

const copyEmailNotification = document.getElementById("copied-email");

email.addEventListener("click", (event) => {
  copyEmailNotification.style.display = "inline";
  setTimeout(() => {
    copyEmailNotification.style.display = "none";
  }, 2000);
});
