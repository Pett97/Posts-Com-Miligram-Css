import List from "./list.mjs";

async function getAllPosts() {
  let list = new List();

  let posts = await list.gettAllPosts();

  let postsElement = document.createElement("div");

  let autores = [];

  Object.keys(posts).forEach((autor) => {
    let postsAutor = posts[autor];
    autores.push({ autor, posts: postsAutor });
  });

  autores.forEach((autor) => {
    autor.posts.forEach((post) => {
      postsElement.innerHTML += `<section class="my-card container">
      <div class="row">
        <div class="column my-card-background-header">
          <header>
            <h2>${post.title}</h2>
          </header>
        </div>  
      </div>
      <div class="card-body">
      <blockquote>
       <p><em>${post.body}</em></p>
      </blockquote>
      </div>
      <div class="container">
        <div class="row">
          <div class="column column-70">
            <h5 id="likes">Curtidas: ${post.likes}</h5>
          </div>
          <div class="column column-20">
            <h5>Perfil: ${autor.autor}</h5>
          </div>
        </div>
      </div>
    </section>`;
    });
  });

  document.body.appendChild(postsElement);
}

window.onload = getAllPosts;


