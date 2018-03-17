
/*
-> An array looks like this
var projects = [ ]

-> An array can have objects inside of them.

var projects = [ {}, {}, {}, {}]

-> Individual items in an array can be accessed by their index value.

var projects = [ {}, {}, {}, {}, ...]
                  0   1   2   3 ...


*/


/*

Create two functions:
1) writeToDom: this function should accept a string and print it to a div with an id of my-projects

2)createProjectCards: this function should loop through the projects 
array and build up the html that you have on your projects page.

It should call the writeToDom function for each project.
The last line of this file should be: createProjectCards();

*/



var projects = [
    {
      id: "project1", 
      title: "Cool Project", 
      imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
      },

    {
        id: "project2", 
        title: "Project 2", 
        imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },

    {
        id: "project3", 
        title: "Project 3", 
        imageUrl: "https://pixel.nymag.com/imgs/daily/vulture/2017/11/14/14-the-room-tommy-wiseau.w710.h473.jpg", 
        description: "This is the best project",
        githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    }
  ];


//WRITING WHAT YOUR FUNCTION WILL DO
  function writeToDom(id, element){
    var currentProjectDiv = document.getElementById(id);
    currentProjectDiv.appendChild(element)
  }



  

                              //an array of projects
  function createProjectCards(myProjects){

    
    //1. start looping through each project
    //myProjects.forEach(a function goes here)
    myProjects.forEach(function(project){
   
      
      var myCard = document.createElement("div");
      var projectImage = document.createElement("img");
      var description = document.createTextNode(project.description);
      
      projectImage.src = project.imageUrl
      myCard.appendChild(projectImage);
      myCard.appendChild(description);
      myCard.className = "my-card"
      writeToDom(project.id, myCard);
    })


   
  }

  createProjectCards(projects)








