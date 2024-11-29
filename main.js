let email = document.getElementById("copyTest");

email.addEventListener("click", copyText);

function copyText() {
  navigator.clipboard.writeText("m.g.plunkett@gmail.com").then(
    () => {
      console.log("copied to clipboard");
    },
    () => {
      console.log("failed to copy", err);
    }
  );
}
