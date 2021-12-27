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
