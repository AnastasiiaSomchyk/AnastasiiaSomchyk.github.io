/*Creat a file called blogs.html in the same location as your index.html file.

Create a file in the javascripts folder called blogs.js and link this file to your blogs HTML page

Create an object for each of your blogs. Each blog should have a unique id.

Put all the objects in a single array called blogs.*/

/*Create two functions:
writeToDom: this function should accept a string and print it to a div with an id of my-projects

createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog.
 It should call the writeToDom function for each blog.

The last line of this file should be: createBlogPosts();*/

const writeToDom = (id, element) => {
  let blogPostDiv = document.getElementById(id);
  blogPostDiv.innerHTML += element;
};

const createBlogPosts = myBlogCards => {
  myBlogCards.forEach(blog => {
    let cardToPost = `
    <div class="card col-md-3 offset-md-3">
                     <h1>${blog.title}</h1>
                     <h2> ${blog.date}</h2>
                     <p> ${blog.post}</p>
          </div>
       `;

    writeToDom(blog.id, cardToPost);
  });
};

function executeThisCodeIfXHRFails() {
  console.log("An error occurred");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  console.log("data: ", data);
  createBlogPosts(data.blogs); // BUILD YOUR DOMSTRING HERE
}

const startApplication = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "./db/blogs.json");
  myRequest.send();
};

startApplication();
