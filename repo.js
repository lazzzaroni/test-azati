const repo = document.getElementById('repo');

// get parameters from GET request
const queryString = window.location.search;
// console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const repoName = urlParams.get('repo_name');
const ownerName = urlParams.get('owner_name');
// console.log(repoName);
// console.log(ownerName);

// make API call to get the repo
const loadRepo = async (repoName, ownerName) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${ownerName}/${repoName}`
    );

    const repo = await res.json();
    // display repo data on the screen
    display(repo);
  } catch (err) {
    console.error(err);
  }
};

loadRepo(repoName, ownerName);

// parse JSON to repo.html
const display = (req) => {
  repo.innerHTML = `
    <h1>${req.name}</h1>
    <ul class="cardRepo">
      <li>URL:
      <a href="${req.html_url}" target="_blank">${req.html_url}</a>
      </li>
      <li>Full name: ${req.full_name}</li>
      <li>ID: ${req.id}</li>
      <li>Language: ${req.language}</li>
      <li>Description: ${req.description}</li>
      <li>Created at: ${req.created_at}</li>
    </ul>
    `;
};
