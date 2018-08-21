const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortBy"]:checked').value;

    const searchLimit = document.getElementById('limit').value;

    console.log(searchLimit);

    if (searchTerm === '') {

        showMessage('Please add a seach term', 'alert-danger');

    }
    e.preventDefault();
})


function showMessage(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    const searchcontainer = document.getElementById('search-container');

    const search = document.getElementById('search');

    searchcontainer.insertBefore(div, search);

    setTimeout(() => document.querySelector('.alert-danger').remove(), 2000)
}