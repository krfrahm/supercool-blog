const user = document.getElementById('username');
const title = document.getElementById('entry-title');
const entry = document.getElementById('content');
const submitButton = document.getElementById('submit');
const blogList =document.getElementById('blog-list')

const entries = [];



submitButton.addEventListener('click', function(event){
    event.preventDefault();

    const blogEntry = {
        user: user.value,
        title: title.value,
        entry: entry.value
    };

    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    
    entries.push(blogEntry);

    storeEntries();
})


  

  function storeEntries() {
   
    localStorage.setItem('entries', JSON.stringify(entries));
  }



 document.getElementById("submit").onclick = function () {
    location.href = "blog.html";};


