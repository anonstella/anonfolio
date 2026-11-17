const target = document.querySelector(".project-container");

fetch("../projects.json")
  .then((response) => response.text())
  .then((text) => {
    const raw = JSON.parse(text);

    console.log(raw[0]);

    for (const item of raw) {
      const project = document.createElement("div");

      project.innerHTML = `
        <div class="split borders">
        <div class="gridBg borders">
        <p class="topic ${item.type}">${item.type}</p>
        <h2 class="h2Light">${item.name}</h2>
        <p class="pLight">
          ${item.description}
          <br />
          Language(s): ${item.languages}
        </p>
        <br />
        <div class="container">
          <a href="${item.link}" target="_blank"
            ><img class="icon-btn" src="src/GitHub.png" alt="github" />
          </a>
        </div>
      </div>
      <div class="${item.accent_colour} borders">
        <img src="src/imageFrame.png" alt="placeholder" class="display-image" />
      </div>
      `;

      target.append(project);
    }
  });
