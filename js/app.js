//select all the elements

const bope = document.getElementById('list-title');
const addTodo = document.getElementById('addthingstodo');
const listItems = document.getElementById('itemsonlist');
const completedTodos = document.getElementById('complete-list');
const allthethings = document.getElementById('kontainer');
const allcontainers = document.getElementById("item-list");
const alllists = document.getElementById("list");
const listsofcomplete = document.getElementById("listComplete");
const classoffinished = document.getElementById("completealllist");

const changedisplay = document.getElementById('allfinishedlist');

//

bope.addEventListener("click", function() {
    bope.style.backgroundColor = '#4b99a9';
    bope.style.color = 'black';
    allthethings.style.backgroundColor = '#4b96a9';

    //allthethings.style.border = "white";

});
bope.addEventListener("dblclick", function() {
        bope.style.background = '#70ad8b';
        bope.style.color = 'white';
        allthethings.style.backgroundColor = '#bed6a6';
    })
    //document.getElementById("myElement").style.stylePropertyName



//for the todo  list

let LIST = [];
id = 0;
let completedTodo = []; //list of completed todo items
let finishedTodo = []; //list of finished todo


// add a todo on pressing enter key
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        const motodo = addthingstodo.value;

        //if not empty add a new  item else do nothing

        if (motodo) {
            LIST.push(motodo);
            id++;

            addthingstodo.value = "";

        } else {
            return;
        }

        //clear the input area
        addthingstodo.value = "";

        //new list item to be added
        //<i class="fa fa-user fa-sm "  job ="complete"    id= "${id}"></i>
        const listtext = `<li id="itemsonlist" >
                            <i class="fa fa-check-circle fa-sm mycircle"  job ="complete"    id= "${id}"></i>
                            ${motodo} 
                            <i class="fa fa-trash fa-sm fa-pull-right"  job ="delete"    id= "${id}" ></i> 
                            <i class="fa fa-star fa-sm fa-pull-right  mystar"  job ="important"    id= "${id}"></i>
                            
                         </li>`;
        console.log(listtext);

        const position = "beforeend";
        console.log(LIST);
        //kontainer.appendChild(listtext);

        alllists.insertAdjacentHTML(position, listtext);

    }

});


//function to remove list item

function removeList(elem) {
    elem.parentElement.parentElement.removeChild(elem.parentElement);
    console.log(elem.parentElement);
    console.log(elem.parentElement.parentElement);


}



//add element to complete todo list

function addcompletedTodo(elem) {
    completedTodo.push(elem.parentElement);
    //console.log(completedTodo.push(elem));
    //console.log(completedTodo);
}

//remove a list item of any selected list

alllists.addEventListener('click', function(event) {
    const element = event.target;
    //console.log(element);
    const jobstatus = element.attributes.job.value;
    //console.log(jobstatus);
    if (jobstatus == 'delete') {
        removeList(element);
    } else if (jobstatus == 'complete') {
        const completedlist = addcompletedTodo(element);
        // console.log(addcompletedTodo(element));


        const elementComplete = event.target.parentElement;
        console.log(elementComplete);
        const position = "beforeend";

        //listsofcomplete.insertAdjacentHTML(position, elementComplete);
        listsofcomplete.appendChild(elementComplete);
        //console.log(listsofcomplete)




    }


});


/*completedTodos.addEventListener('click', function(event) {
    const position = "beforeend";

    const elementComplete = event.target;
    console.log(completedTodo);
    console.log(elementComplete);


    listsofcomplete.insertAdjacentHTML(position, elementComplete);

})*/

// display finished-list when completedtodos button is clicked


completedTodos.addEventListener('click', function() {
    //listsofcomplete.style.display = 'Block';
    if (changedisplay.classList == "finished-list") {
        completedTodos.value = "HIDE COMPLETED TODOS"
        changedisplay.classList.remove("finished-list");
        changedisplay.classList.add("finished-list-2");

    } else {
        completedTodos.value = "SHOW COMPLETED TODOS"
        changedisplay.classList.remove("finished-list-2");
        changedisplay.classList.add("finished-list");
    }

});