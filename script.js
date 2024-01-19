const output = document.getElementById("output");

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
        listCount++
      }
        output.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">Tasks</h3><div>${toDoListHTML}</div><br><br>`;     
        })
  }

function userId() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(listUser => {
      const idArray = listUser.map(item => item.userId); //extract userId
      const uniqueId = new Set(idArray); //remove duplicates to store unique values
      const uniqueUserIds = Array.from(uniqueId); //convert to array of unique values

      let userHTML = `
        <p style="text-align: center">Select user ID from the dropdown menu</p><br>
        <select id="userIdDropdown">`;
      uniqueUserIds.forEach(userId => {
        userHTML += `<option value="${userId}">${userId}</option>`;
      });
      userHTML += `</select>
                   <br><br>
                   <input type="submit" value="Submit" onclick="showList()">`;

      output.innerHTML = userHTML;
    })
}

// Function to display the list based on the selected user ID
function showList() {
  const selectedUserId = document.getElementById("userIdDropdown").value;

  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${selectedUserId}`)
    .then(response => response.json())
    .then(userList => {
      let toDoListHTML = "";

      for (const list of userList) {
        const toDo = list.title;
        const complete = list.completed;
        const checkMark = complete ? '&#9989;' : '';
        toDoListHTML += `<div align=center><br>${toDo} ${checkMark}</div>`;
      }

      output.innerHTML += toDoListHTML; // Append the list to the existing content
    })
    .catch(err => console.error(err));
}