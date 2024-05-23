const blogList = document.getElementById('blog-list')

const blogEntries = []

const flatArray = [];

function renderEntries() {
    blogList.innerHTML = '';
    steamrollArray(blogEntries);

    for (let i = 0; i < flatArray.length; i++) {
      const post = flatArray[i];
  
      const li = document.createElement('li');
      const h3 =  document.createElement('h3')
      const p = document.createElement('p')
      const h4 = document.createElement('h4')
      h3.textContent = post.title, 
      h3.setAttribute('post', i);
      p.textContent = post.entry;
      p.setAttribute ('post-content', i);
      h4.textContent = "created by" + post.user;
      h4.setAttribute ('post-content', i);

  
      blogList.appendChild(li);
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(h4);
    }
  }

  
  if(localStorage.getItem('user') == null){
  window.onload = function () {
    let storage = localStorage.getItem('entries')
    let user = JSON.parse(storage);

    blogEntries.push(user)
    
    storeEntries()
    renderEntries()
  }
}else{
  window.onload = function () {
    let storage = localStorage.getItem('user');
    let user = JSON.parse(storage);

    blogEntries.push(user);
    
    storeEntries();
    renderEntries();
  }
}

function storeEntries(){
    if(localStorage.getItem('blogEntries') == null) { 
      localStorage.setItem('blogEntries',JSON.stringify(blogEntries));
     }
     else{
     var entries = JSON.parse(localStorage.getItem('blogEntries'));
     entries.length=0;
     entries.push(blogEntries);
     localStorage.setItem('entries', JSON.stringify(entries));
    }
 }


function steamrollArray(array) {
  flatten(array);
    
    function flatten(array) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          flatten(array[i]);
        } else {
          flatArray.push(array[i]);
        }
      }
    }
    console.log(flatArray)
    return flatArray;
      
    }
  

document.getElementById("back").onclick = function () {
 location.href = "index.html";
};


