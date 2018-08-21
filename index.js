const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {

    const searchTerm = searchInput.value; 

    const sortBy = document.querySelector('input[name="sortBy"]:checked').value;

    console.log(sortBy);



    e.preventDefault();
})