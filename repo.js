const repo = document.getElementById('repo');

// get parameters from GET request
const queryString = window.location.search;
// console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const repoName = urlParams.get('repo_name');
const ownerName = urlParams.get('owner_name');
// console.log(repoName);
// console.log(ownerName);
