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
