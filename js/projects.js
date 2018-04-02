/*

Create two functions:
1) writeToDom: this function should accept a string and print it to a div with an id of my-projects

2)createProjectCards: this function should loop through the projects 
array and build up the html that you have on your projects page.

It should call the writeToDom function for each project.
The last line of this file should be: createProjectCards();

*/

//WRITING WHAT YOUR FUNCTION WILL DO
const writeToDom = (id, element) => {
  let currentProjectDiv = document.getElementById(id);
  currentProjectDiv.innerHTML += element;
};

//an array of projects
const createProjectCards = myProjects => {
  //1. start looping through each project
  //myProjects.forEach(a function goes here)
  myProjects.forEach(project => {
    let myCard = `
      <div class="my-card" id=${project.id}>
          <img class="project-img" src="${project.imageUrl}">
          <h1>${project.title}</h1>
          <p> ${project.description}</p>
          <a href="${project.githubUrl}">link to GitHub Repo</a>
      </div>
     `;
    writeToDom("projects", myCard);
  });
};

function executeThisCodeIfXHRFails() {
  console.log("An error occurred");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  console.log("this. ");
  createProjectCards(data.projects); // BUILD YOUR DOMSTRING HERE
}

const startApplication = () => {
  var myRequest = new XMLHttpRequest();

  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/projects.json");
  myRequest.send();
};

startApplication();
