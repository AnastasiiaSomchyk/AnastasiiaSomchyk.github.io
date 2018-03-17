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
      title: "Best First Day Ever!!!", 
      date: "02/12/2018", 
      post: "Today was the first day of class and it was the BEST!!!!!!!"
      },

      {
        id: "blog2", 
        title: "Best First Day Ever!!!", 
        date: "02/12/2018", 
        post: "Today was the first day of class and it was the BEST!!!!!!!"
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
blogPostDiv.appendChild(element);


}

  function createBlogPosts(myBlogCards){

myBlogCards.forEach(function(blogs){


    var myCardsLayout = document.createElement("div");
    var title = document.createTextNode(blogs.title);
    var date = document.createTextNode(blogs. date);
    var post = document.createTextNode(blogs. post);


   
    myCardsLayout.appendChild(title);
    myCardsLayout.appendChild(date);
    myCardsLayout.appendChild(post);

    myCardsLayout.className = "blog-cards-layout";
    writeToDom(blogs.id, myCardsLayout)
   
    

})
  }

  createBlogPosts(blogs)




