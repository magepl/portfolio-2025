const myEmail = "m.g.plunkett@gmail.com";

const email = document.getElementById("copy-email");

email.addEventListener("click", copyEmail);

function copyEmail() {
  navigator.clipboard.writeText(myEmail).then(
    () => {
      email.textContent = "copied to clipboard!";
      setTimeout(() => {
        email.textContent = "email";
      }, 2000);
    },
    () => {
      console.log("failed to copy", err);
    }
  );
}

const repoOwner = "magepl";
const repoName = "portfolio-2025";
const githhubUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;
const repoDateUpdated = document.getElementById("github-last-updated-at");

fetch(githhubUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  })
  .then((data) => {
    const date = new Date(data.updated_at);
    const [day, month, year] = [
      date.getDate(),
      date.getMonth(),
      date.getFullYear(),
    ];
    repoDateUpdated.textContent = `Last updated on: ${day}/${
      month + 1
    }/${year}`;
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
