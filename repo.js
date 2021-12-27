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
