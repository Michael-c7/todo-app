let textInput = document.querySelector(".todo__input")
let addInputBtn = document.querySelector(".add-btn")
let todoTasks = document.querySelector(".todo__tasks")
let deleteAllBtn = document.querySelector(".todo__delete-all-btn")



/*TODO
1. get input value from the input [DONE]

2. add the input to the list w/ the add button [DONE]

3. delete the current item in the list w/ the delete button [DONE]

4. delete all the items w/ the delete all btn [DONE]

5. put the todo tasks into local storage
*/





/*get the user input value from the input box*/
function userInput() {
    return textInput.value;
}
textInput.addEventListener("input", userInput);





/*add the input to the list w/ the add button*/
function addUserInputToTodoList() {
    /*fragment*/
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
    /*append the document fragment to the DOM(todo__tasks)*/
    todoTasks.appendChild(docFrag);
}
addInputBtn.addEventListener("click", addUserInputToTodoList);





/*delete the current item in the list w/ the delete button */
function deleteTaskBtn(event) {
    let deleteBtn = event.target.closest(".todo__task__delete-btn");
    let icon = event.target.closest(".fa-times");
    let currentItem = event.target.closest(".todo__task");


    // check if your currently clicking on the delete button
    if(event.target === icon || event.target === deleteBtn) {
        let confirmTaskDeletion = confirm("Do you want to delete this task?");
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





