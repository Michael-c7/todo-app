let textInput = document.querySelector(".todo__input")
let addInputBtn = document.querySelector(".add-btn")
let todoTasks = document.querySelector(".todo__tasks")
let deleteAllBtn = document.querySelector(".todo__delete-all-btn")





/*get the user input value from the input box*/
function userInput() {
    // add frag to local storage
    return textInput.value;
}
textInput.addEventListener("input", userInput);





function clearUserInput() {
    return textInput.value = "";
}





function todoTaskFragment() {
    const docFrag = document.createDocumentFragment();
        let todoTask = document.createElement("li");
        let todoTaskText = document.createElement("span");
        let todoTaskDeleteBtn = document.createElement("button");
        let todoTaskDeleteBtnIcon = document.createElement("i");
        /*text */
        todoTaskText.textContent = userInput();
        /*CSS classes*/
        todoTask.classList.add("todo__task");
        todoTaskText.classList.add("todo__task__text");
        todoTaskDeleteBtn.classList.add("todo__task__delete-btn");
        todoTaskDeleteBtnIcon.classList.add("fa", "fa-times");
        /*append the items*/
        docFrag.appendChild(todoTask);
        todoTask.appendChild(todoTaskText);
        todoTask.appendChild(todoTaskDeleteBtn);
        todoTaskDeleteBtn.appendChild(todoTaskDeleteBtnIcon);
    /*append the document fragment to the DOM(.todo__tasks)*/
    todoTasks.appendChild(docFrag);
    /*to place at the top of the list instead use insert before
    https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore*/
}





/*add the input to the list w/ the add button*/
function addUserInputToTodoList() {
    /*fragment*/
    todoTaskFragment()




    /* clear the input after you
    add an item to the list of tasks*/
    clearUserInput()
}
addInputBtn.addEventListener("click", addUserInputToTodoList);





/*delete the current item in the list w/ the delete button */
function deleteTaskBtn(event) {
    let deleteBtn = event.target.closest(".todo__task__delete-btn");
    let icon = event.target.closest(".fa-times");
    let currentItem = event.target.closest(".todo__task");


    // instead of both the thing only this
    //  event.target.closest(".fa-times").parentElement;

    // check if your currently clicking on the delete button
    if(event.target === icon || event.target === deleteBtn) {
        let confirmTaskDeletion = confirm("Are you sure you want to delete this task?");
        if(confirmTaskDeletion) {
            currentItem.remove();
        }
    }
}
todoTasks.addEventListener("click", deleteTaskBtn);





// delete all tasks
deleteAllBtn.addEventListener("click", _ => {
    let todoTaskAll = Array.from(document.querySelectorAll(".todo__task"))
    for(let i = 0; i < todoTaskAll.length; i++) {
        todoTaskAll[i].remove()
    }
})





