import reddit from './redditApi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
    const searchLimit = document.getElementById('limit').value;
    if (searchTerm === '') {
        showMessage('Please add a seach term', 'alert-danger');
    }
    searchInput.value = '';

    reddit.search(searchTerm, searchLimit, sortBy).then(results => {
        let output = '<div class="card-columns">'


        results.forEach(post => {
            console.log(post)

            const image = post.preview ? post.preview.images[0].source.url : 'https://cdn.vox-cdn.com/thumbor/QPV9DP3CTNEjFQL2uHkFrm_oyIE=/0x0:640x427/920x613/filters:focal(269x163:371x265):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59028817/reddit_logo_640.0.jpg'
            
            console.log(post )

            output += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${truncateText(post.selftext ,100)}</p>
                    <a href="${post.url}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
        });
        output += '</div>';
        document.getElementById('results').innerHTML = output;
    })

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

function truncateText(text, limit) {
    const short = text.indexOf(' ', limit);
    if (short === -1) return text;
    return text.substring(0, short);
}