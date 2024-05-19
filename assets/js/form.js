const user = document.getElementById('username');
const title = document.getElementById('entry-title');
const entry = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event){
    const blogEntry = {
        user: user.value,
        title: title.value,
        entry: entry.value
    };

    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    renderMessage();
})