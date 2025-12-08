let todos = [
    {
        "id": 1,
        "name": "Wash the dogs",
        "urgency": "high",
        "done": true
    },
    {
        "id": 2,
        "name": "Buy groceries",
        "urgency": "medium",
        "done": false
    },
    {
        "id": 3,
        "name": "Pay bills",
        "urgency": "high",
        "done": true
    }
]

// recieves three parameters
// 1st parameter - the array that store all the todos
// 2nd parameter - the name of the todo
// 3rd parameter - urgency
function addTodo(todos, name, urgency) {

    if (name.length >= 0 && ['low', 'medium', 'high'].includes(urgency)) {
        let newTodo = {
            "id": Math.floor(Math.random() * 9999) + 1,
            "name": name,
            "urgency": urgency,
            "done": false
        }
        todos.push(newTodo);
    } else {
        throw "Invalid parameters";
    }

}

function modifyTask(todos, idToModify, newName, newUrgency, newDone) {
    console.log(idToModify, newName, newUrgency, newDone);
    // create a new todo that will replace the original one
    // When we modify something by replacing it with a new thing
    // it's known as a PUT
    let modifiedTask = {
        "id": idToModify,
        "name": newName,
        "urgency": newUrgency,
        "done": newDone
    }
    console.log(modifiedTask);

    // replace the existing todo with the same id with modifiedTask

    // 1. find the index of the todo which we want to replace
    let indexToModify = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == idToModify) {
            indexToModify = i;
            console.log("indexToModify =", indexToModify)
            break;
        }
    }

    // 2. if indexToModify is not null then we have found the index
    // of the todo that we want to replace
    if (indexToModify != null) {
        console.log("Replacment occur")
        todos[indexToModify] = modifiedTask;
    }
}

function deleteTask(todos, idToDelete) {
      // 1. find the index of the todo which we want to replace
    let indexToDelete = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == idToDelete) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete != null) {
        todos.splice(indexToDelete, 1);
    }
}