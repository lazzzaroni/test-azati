const cardList = document.getElementById('cardList');
const searchBar = document.getElementById('searchBar');
let reposNames = {};

// add functional to searchbar
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  // console.log(searchString);

  if (searchString === '') {
    reposNames = {};
  } else {
    loadRepos(searchString);
  }
});

// make API calls from searchbar
const loadRepos = async (searchString) => {
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${searchString}`
    );

    reposNames = await res.json();
    if (reposNames.items === undefined || reposNames.items === []) {
      reposNames = {};
    } else {
      displayRepos(reposNames.items);
    }
  } catch (err) {
    console.error(err);
  }
};

// parse JSON to index.html
const displayRepos = (req) => {
  const htmlString = req
    .map((i) => {
      return `
      <li class="card">
        <a href="repo.html?repo_name=${i.name}&owner_name=${i.owner.login}">${i.name}</a>
        <p>ID: ${i.id}</p>
      </li>
      `;
    })
    .join('');
  cardList.innerHTML = htmlString;
};
