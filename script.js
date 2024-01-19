const output = document.getElementById("output");

function showTasks() {
  
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(listToDo => {
      const lists = listToDo; 
        let toDoListHTML = "";
        let listCount = 0;
        let listNumbers = 50;
      for (const list of lists) {
        const toDo = list.title;
        const complete = list.completed;
        const checkMark = complete? '&#9989' : null ;
        toDoListHTML += `<div align= center >${toDo} ${checkMark}</div>`;
        listCount++
        if (listCount === listNumbers) { break; }
      }
        output.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">Tasks</h3><div>${toDoListHTML}</div><br><br>`;     
        })
  }

