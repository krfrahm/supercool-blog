const user = document.getElementById('username');
const title = document.getElementById('entry-title');
const entry = document.getElementById('content');
const submitButton = document.getElementById('submit');
const blogList = document.getElementById('blog-list');

const blogEntries = []; 

function renderEntries() {
    blogList.innerHTML = '';
    
    for (let i = 0; i < entries.length; i++) {
      const post = entries[i];
  
      const li = document.createElement('li');
      const p = document.createElement('p')
      const h3 = document.createElement('h3')
      li.textContent = post.title, 
      li.setAttribute('post', i);
      p.textContent = post.entry;
      p.setAttribute ('post-content', i);
      h3.textContent = "created by" + post.user;
      p.setAttribute ('post-content', i);

  
      blogList.appendChild(li);
      blogList.appendChild(p);
      blogList.appendChild(h3);
    }
  }
  
  function getEntries () {
   //blogEntries = localStorage.getItem('entries')
    

    blogEntries.push(entries)
console.log(blogEntries)
}

  function init() {
   // entries.push(console)
    
    //localStorage.setItem('entries', JSON.stringify(entries));
   //JSON.parse(localStorage.getItem('entries'));
   
   getEntries(); 
   //renderEntries();
  }
  

document.getElementById("back").onclick = function () {
 location.href = "index.html";
};


  