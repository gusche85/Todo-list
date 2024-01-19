const output = document.getElementById("output");

function showTasks() {
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(listToDo => {
    const lists = listToDo;
      let toDoListHTML = "";
    for (const list of lists) {
      const user = list.id;
      const toDo = list.title;
      

      toDoListHTML += `<div align= center ><br>Task: ${toDo}</div>`;
    }
      output.innerHTML = toDoListHTML;
    })
    .catch(err => console.error(err));

}