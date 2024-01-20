const output = document.getElementById("output");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

function hideAll() {   //erase previous outputs
  output.style.display = "none";
  output1.style.display = "none";
  output2.style.display = "none";
}

function showTasks() {
  hideAll();
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
        output.style.display = "block"
        })
  .catch(err => console.error(err));
  }

function userId() {
  hideAll();
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
      output.style.display = "block"
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
      output1.style.display = "block"
    })
    .catch(err => console.error(err));
}

function completedTasks() {
  hideAll();
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(listToDo => {
      const lists = listToDo; 
        let completeHTML = "";
      for (const list of lists) {
        const toDo = list.title;
        const complete = list.completed;
        if(complete) {
        completeHTML += `<div>${toDo}</div>`;}
      }
        output2.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">These tasks has been completed</h3><div>${completeHTML}</div><br><br>`;  
        output2.style.display = "block"
        })
  .catch(err => console.error(err));
  }

