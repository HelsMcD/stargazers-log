fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.getElementById("stargazers-list");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <div class="repo-name">${event.repo}</div>
        <div class="repo-description">${event.description}</div>
        <div class="starred-at">Starred on ${event.starredAt}</div>
      `;
      list.appendChild(item);
    });
  })
  .catch((error) => console.error("Error fetching events:", error));
