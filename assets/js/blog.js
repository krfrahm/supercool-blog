const blogList = document.getElementById('blog-list')

const blogEntries = []

const flatArray = [];

function renderEntries() {
    blogList.innerHTML = '';
    steamrollArray(blogEntries);

    for (let i = 0; i < flatArray.length; i++) {
      const post = flatArray[i];
  
      const li = document.createElement('li');
      const h2 =  document.createElement('h2')
      const p = document.createElement('p')
      const h3 = document.createElement('h3')
      h2.textContent = post.title, 
      h2.setAttribute('post', i);
      p.textContent = post.entry;
      p.setAttribute ('post-content', i);
      h3.textContent = "created by" + post.user;
      p.setAttribute ('post-content', i);

  
      blogList.appendChild(li);
      blogList.appendChild(h2);
      blogList.appendChild(p);
      blogList.appendChild(h3);
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
    let storage = localStorage.getItem('user')
    let user = JSON.parse(storage);

    blogEntries.push(user)
    
    storeEntries()
    renderEntries()
}}

  // window.addEventListener("storage", () => {
  //   // When local storage changes, dump the list to
  //   // the console.
  //   console.log(JSON.parse(localStorage.getItem("blogEntries")));
  // });

  function storeEntries(){
    if(localStorage.getItem('blogEntries') == null) { 
      localStorage.setItem('blogEntries',JSON.stringify(blogEntries))
     }
     else{
     var entries = JSON.parse(localStorage.getItem('blogEntries'));
     entries.length=0
     entries.push(blogEntries);
     localStorage.setItem('entries', JSON.stringify(entries))
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
   
  // function init( ){
  //   var entries = localStorage.getItem(entries)
  //   JSON.parse(localStorage.getItem(entries));
  //   blogEntries.push(entries)
  //   console.log(blogEntries)
  // }
  

document.getElementById("back").onclick = function () {
 location.href = "index.html";
};


