const blogList =document.getElementById('blog-list')

const blogEntries = []

function renderEntries() {
    blogList.innerHTML = '';
    
    for (let i = 0; i < blogEntries[0].length; i++) {
      const post = blogEntries[0][i];
  
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

  window.onload = function () {
    let storage = localStorage.getItem('entries')
    let entries = JSON.parse(storage);
   
    blogEntries.push(entries)
    console.log(blogEntries[0])

    storeEntries()
    renderEntries()
  }

  function storeEntries(){
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries)); 
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


  