const Manager = require("../lib/manager");
const generateTeam = (team) => {


  function generateManagerHTML(manager) {
    return `
    <div class="card w-50">
  <div class="card-body">
    <h5 class="managerTitle bg-success text-center"> Manager</h5>
    <p class="card-text"> Name: ${manager.name} <br> Office Number: ${manager.officeNumber} <br> Employee ID: ${manager.id} <br> Email: ${manager.email} </p>
  </div>
  </div>
    `
  }
  function generateInternHtml(intern) {
    return `<div class="card w-50">
    <div class="card-body">
      <h5 class="internTitle bg-primary text-center"> Intern</h5>
      <p class="card-text"> Name: ${intern.name} <br> Employee ID: ${intern.id} <br> School: ${intern.school} <br> Email: ${intern.email} </p>
    </div>
    </div>`
  }
  function generateEngineerHtml(engineer) {
    return ` <div class="card w-50">
    <h5 class="engineerTitle bg-warning text-center"> Engineer </h5>
    <p class="card-text"> Name: ${engineer.name} <br> Employee ID: ${engineer.id} <br> Github: ${engineer.github} <br> Email: ${engineer.email} </p>
  </div>
  </div>`
  }

  const htmlData = []
  htmlData.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManagerHTML(manager)))
  htmlData.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateInternHtml(intern)))
  htmlData.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineerHtml(engineer)))


  return htmlData.join('')
}


module.exports = team => {


  return ` <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
          <link rel="stylesheet" href="./src/style.css">
          <title>Team Profile</title>
        </head>
        <body>
         <header class = "bg-danger text-center">
         <h1>Team Roster</h1>
         </header>
          <div class="card-group justify-content-center">
         <p> ${generateTeam(team)} </p>
         </div>
          </body>
          
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        
      </html>`
}