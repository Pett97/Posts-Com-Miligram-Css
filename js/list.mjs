class List {
  async gettAllPosts() {
    let data;
    try {
      const response = await fetch("http://localhost:3000/posts");
      data = await response.json();

      return data;
    } catch (error) {
      console.log("Erro ao buscar os Posts", error);
    }
  }
}

export default List;
//let test = new List();
//
//test.gettAllPosts().then(posts=>{
//  console.log(posts);
//})