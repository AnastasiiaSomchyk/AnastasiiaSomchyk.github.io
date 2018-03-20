/*Creat a file called blogs.html in the same location as your index.html file.

Create a file in the javascripts folder called blogs.js and link this file to your blogs HTML page

Create an object for each of your blogs. Each blog should have a unique id.

Put all the objects in a single array called blogs.*/


/*Create two functions:
writeToDom: this function should accept a string and print it to a div with an id of my-projects

createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog.
 It should call the writeToDom function for each blog.

The last line of this file should be: createBlogPosts();*/

var blogs = [

      {
        id: "blog1", 
        title: "Blog Section", 
        date: "03/19/2018", 
        post: "Finally finished with my blog section. Still need to do a lot of work, but my function 'writeToDom' is working. Also, I add some styling to it which made my 'grid' look better."
        },

        {
            id: "blog2", 
            title: "Personal Bio Site", 
            date: "03/13/2018", 
            post: "Working on my personal page. Decided to build a new portfolio bc old one was not responsive in a browser. According to portfolio requirements it supposed to be build with HTML5 and CSS. Sounds easy but since I taught myself to work with the bootstrap it took me some time to refresh my knowledge with flex box. It was a good practice for me to go over basic material"
            },

        {
            id: "blog3", 
            title: "Best First Day Ever!!!", 
            date: "02/12/2018", 
            post: "Today was the first day of class and it was the BEST!!!!!!!"
            }
  ];


  function writeToDom(id, element){
var blogPostDiv = document.getElementById(id);
blogPostDiv.innerHTML += element;



}

function createBlogPosts(myBlogCards){
    

    myBlogCards.forEach(function(blog){
        var cardToPost = `<div class="card">`
         
   

        cardToPost += `<h1 >${blog.title}</h1>`
        cardToPost += `<h2> ${blog.date}</h2>`
        cardToPost += `<p> ${blog.post}</p>`
        cardToPost += `</div>`


    writeToDom(blog.id, cardToPost)
   
    

})
  }

  createBlogPosts(blogs)






