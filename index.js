const target = document.querySelector(".container-project");

fetch("../featured.json")
  .then((response) => response.text())
  .then((text) => {
    const raw = JSON.parse(text);

    for (const item of raw) {
      const project = document.createElement("div");

      project.innerHTML = `
      <div class="project-panel borders">
        <img
          class="icon-btn gitIcon"
          src="src/GitHub.png"
          alt="Github Logo"
        />
        <h2 class="h2Dark">${item.name}</h2>
        <br />
        <p>${item.languages}</p>
        <br />
        <a href="${item.redirect}" target="_blank"
            ><img src="src/ExternalLink.png" alt="Goto"
        /></a>
      </div>
      `;

      target.append(project);
    }
  });
