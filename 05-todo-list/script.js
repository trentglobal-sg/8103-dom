// DOMContentLoaded is an event that triggers automatically when the
// all the DOM elements have been created (i.e the HTML file has been processed by the browser)
document.addEventListener("DOMContentLoaded", function(){
    renderTasks(todos);

    let addTodoBtn = document.querySelector("#addTodo");
    addTodoBtn.addEventListener("click", function(){
        let taskNameText = document.querySelector("#taskName");
        let taskName = taskNameText.value;

        let taskUrgencySelect = document.querySelector("#taskUrgency");
        let taskUrgency = taskUrgencySelect.value;

        // we can call `addTodo` here because it is 
        // a global function in `data.js`
        addTodo(todos, taskName, taskUrgency);
        renderTasks(todos);

    })

});


// the todos parameter is an array of todo objects
function renderTasks(todos) {
    let todoUl = document.querySelector("#todos");
    
    // remove all existing children first
    todoUl.innerHTML = "";
    

    for (let t of todos) {
        let liElement = document.createElement('li');
        liElement.className= "list-group-item d-flex justify-content-between align-items-center"
        liElement.innerHTML = `
            <span>${t.name}</span>
            <span class="badge text-bg-primary">${t.urgency}</span>
            <span>Done: ${t.done}</span>
            <button class="btn btn-primary btn-sm edit-button">Edit</button>
            <button class="btn btn-danger btn-sm delete-button">Delete</button>
        `
        
        // we can call querySelector on any DOM element
        // if we do that, it will only search its children
        let editBtn = liElement.querySelector(".edit-button");
        editBtn.addEventListener("click",function(){
            // we use closure to remember the value of t
            // when the function is executed
            let newName = prompt("Enter the new name:");
            let newUrgency = prompt("Enter the new urgency:");
            let newDone = prompt("Enter the new done status (y/n)") == "y";

            console.log(t.id, newName, newUrgency, newDone);
            modifyTask(todos, t.id, newName, newUrgency, newDone);
            renderTasks(todos);

        });

        liElement.querySelector(".delete-button").addEventListener("click", function(){
            console.log("task to delete =", t.id)
            deleteTask(todos, t.id);
            renderTasks(todos);
        })
      
        todoUl.appendChild(liElement);
    }
}