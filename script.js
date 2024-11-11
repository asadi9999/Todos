let todos=localStorage.getItem('todos')
try {
  todos = JSON.parse(todos);
  todos = todos.length ? todos : null;
} catch (error) {
  todos = null;
  // alert('todos is null...')
}
if (!todos) {
  todos = [
    { content: "shopping", status: false },
    { content: "watch video", status: false },
    { content: "like video", status: true },
    { content: "go club", status: true },
    { content: "swimming", status: true },
    { content: "play gitar", status: true },
  ];
  localStorage.setItem("todos", JSON.stringify(todos));
}

//................................................................function creattodos................
function CreatToDos() {
  let todosList = document.querySelector("#todos-list");
  todosList.innerHTML = "";
  
  //creat or update todos list in ui
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    let content = document.createElement("span");
    content.textContent = todo.content;
    content.style.textDecoration = todo.status ? "initial" : "line-through";
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "media/delete.png";
    deleteBtn.alt = "delete icon";
    deleteBtn.className = "float-right";
   
    li.append(content); // append cnontent to li
    li.append(deleteBtn);//append deletBtn to li
    
    todosList.append(li);// append li to todoslist(ul)
    deleteBtn.addEventListener("click", (e) => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      CreatToDos(todos);//update todos
      
    });
    content.addEventListener("click", (e) => {
     todos[index].status = !todos[index].status;
      CreatToDos(todos);
    });
  });
      
}
CreatToDos(todos);

//........................................................action add & search..........................
let actions = document.querySelector("#actions");
let formWrapper = document.querySelector("#form-wrapper");

Array.from(actions.children).forEach((action) => {
  console.log(action.dataset.action);
  if (action.dataset.action == "add") {
    action.addEventListener("click", (e) => {
      
      formWrapper.innerHTML = `<form id="add">
                    <input name="add" placeholder="Add todos..." class="form-control" />
                    </form>`;
        
      let inputAdd = document.querySelector("#add");
      inputAdd.addEventListener("submit", (e) => {
        e.preventDefault();
        if (inputAdd.add.value) {
          todos.push({ content: inputAdd.add.value, status: true });
          localStorage.setItem("todos", JSON.stringify(todos));
          CreatToDos(todos);
          inputAdd.reset();
          inputAdd.add.focus();
        }
      }); //input add event end
    }); //end If
  } else if (action.dataset.action == "search") {
    action.addEventListener("click", (e) => {
      formWrapper.innerHTML = `<form id="search">
      <input name="search" placeholder="search todos..." class="form-control" />
      </form>`;
      let Search=document.querySelector('#search')
      Search.addEventListener('keyup', e => {
      e.preventDefault()
        
      if(Search.search.value){
          let filteredSearch=todos.filter(
          todo => todo.content.toLowerCase().includes(Search.search.value.toLowerCase())) 
            
            // filteredSearch.filter(todo => todo.status= false)
            CreatToDos(filteredSearch);
          }
          else{
            CreatToDos(todos)
          }
      })
      
    });
  }
});
        
      
        


