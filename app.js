let textInput = document.querySelector(".todo__input")
let addInputBtn = document.querySelector(".add-btn")
let todoTasks = document.querySelector(".todo__tasks")




/*TODO
1. get input value from the input [DONE]

2. add the input to the list w/ the add button
- append the dom(ul) w/ the input

3. delete the current item in the list w/ the delete button

4. delete all the items w/ the delete all btn
*/





/*get the user input value from the input box*/
// function userInput(event) {
//     return event.target.value;
// }


function userInput() {
    return textInput.value;
}


textInput.addEventListener("input", userInput);




/*add the input to the list w/ the add button
-----
OR enter keypress
(do enter button as after every other step)*/
function addUserInputToTodoList() {
    // let userInput = userInput();

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


