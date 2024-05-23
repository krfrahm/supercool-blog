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

    checkField();
    storeEntries();
    document.getElementById('submit').onclick = function () {
      location.href = 'blog.html';};
})


  

  function storeEntries() {
   
    if(localStorage.getItem('entries') == null) { 
      localStorage.setItem('entries',JSON.stringify(entries))
     }
     else{
       var newArray = JSON.parse(localStorage.getItem('entries'));
       newArray.push(entries);
       localStorage.setItem('user', JSON.stringify(newArray))
     }
    
}


function checkField(){
  var userEl = user.value;
  while (userEl==''){
    alert('Username needed');
  return false;
  }

  var titleEl = title.value;
  while (titleEl==''){
    alert('Title Needed');
  return false;
  }

  var entryEl = entry.value;
  while (entryEl==''){
    alert('Content Needed');
  return false;
  }
 }
 


