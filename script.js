const output = document.getElementById("output");
const output1 = document.getElementById("output1");

function showTasks() {
  
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(listToDo => {
      const lists = listToDo; 
        let toDoListHTML = "";
      for (const list of lists) {
        const toDo = list.title;
        const complete = list.completed;
        const checkMark = complete? '&#9989' : null ;
        toDoListHTML += `<div align= center >${toDo} ${checkMark}</div>`;
      }
        output.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">Tasks</h3><div>${toDoListHTML}</div><br><br>`;     
        })
  .catch(err => console.error(err));
  }

function userId() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(listUser => {
      const idArray = listUser.map(item => item.userId); //extract userId
      const uniqueId = new Set(idArray); //remove duplicates to store unique values
      const uniqueUserIds = Array.from(uniqueId); //convert to array of unique values

      let userHTML = `
        <h3 style="text-align: center">Select user ID from the dropdown menu</h3><br>
        <select id="userIdDropdown">`;
      uniqueUserIds.forEach(userId => {
        userHTML += `<option value="${userId}">${userId}</option>`;
      });
      userHTML += `</select>
                   <br><br>
                   <input type="submit" value="Submit" onclick="showList()">`;

      output.innerHTML = userHTML;
    })
  .catch(err => console.error(err));
}

function showList() {
  const selectedUser = document.getElementById("userIdDropdown").value;

  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${selectedUser}`)
    .then(response => response.json())
    .then(userList => {
      let toDoListHTML = "";

      for (const list of userList) {
        const toDo = list.title;
        const complete = list.completed;
        const checkMark = complete ? '&#9989;' : '';
        toDoListHTML += `<div align=center>${toDo} ${checkMark}</div>`;
      }

      output1.innerHTML = toDoListHTML; // display under output.innerHTML
    })
    .catch(err => console.error(err));
}

function completedTasks() {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(listToDo => {
      const lists = listToDo; 
        let toDoListHTML = "";
      for (const list of lists) {
        const toDo = list.title;
        const complete = list.completed;
        if(complete) {
        toDoListHTML += `<div>${toDo}</div>`;}
      }
        output.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">These tasks has been completed</h3><div>${toDoListHTML}</div><br><br>`;     
        })
  .catch(err => console.error(err));
  }

