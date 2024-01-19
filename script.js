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
      toDoListHTML += `<div align= center ><br>Task: ${toDo}</div>`;
      listCount++
      if (listCount === listNumbers) { break; }
    }
        output.innerHTML = toDoListHTML;
      })
    .catch(err => console.error(err));

}