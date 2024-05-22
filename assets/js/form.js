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
   
    if(localStorage.getItem('entries') == null) { 
      localStorage.setItem('entries',JSON.stringify(entries))
     }
     else{
       var newArray = JSON.parse(localStorage.getItem("entries"));
       newArray.push(entries);
       localStorage.setItem("user", JSON.stringify(newArray))
     }
    
}



 document.getElementById("submit").onclick = function () {
   location.href = "blog.html";};


