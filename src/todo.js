import './style.css';
class todo{
    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = false
    }
}

class project{
    constructor(name){
        this.name = name
        this.todos = []
    }
    addTodo(todo){
        this.todos.push(todo)
    }
    removeTodo(index){
        this.todos.splice(index,1)
    }
}

const appState = {
    projects : [new project('default')],
    
    addProject(name){
        this.projects.push(new project(name))
    },

    removeProject(index){
        this.projects.splice(index,1)
    },

    getProject(index){
        return this.projects[index]
    }
}

function saveToStorage(){
    localStorage.setItem('appState',JSON.stringify(appState.projects))
}

function loadFromStorage(){
    const data = localStorage.getItem('appState')
    if (data){
        const parsed = JSON.parse(data)
        appState.projects = parsed.map(p => {
            const proj = new project(p.name)
            proj.todos = p.todos.map(t => {
                const newTodo = new todo(t.title,t.description,t.dueDate,t.priority)
                newTodo.completed = t.completed
                return newTodo
            })
            return proj
        })
    }
}

loadFromStorage()

const root = document.querySelector('#root')
const sidebar = document.createElement('div')
const addButton = document.createElement('button')
const projectList = document.createElement('div')

const mainContent = document.createElement('div')
const projectTitle = document.createElement('h2')
const todoList = document.createElement('div')
const addTodoButton = document.createElement('button')

const modal = document.createElement('div')
const modalOverLay = document.createElement('div')

let selectedProjectIndex = 0;

function setupDOM() {
  sidebar.appendChild(projectList);
  sidebar.appendChild(addButton);

  mainContent.appendChild(projectTitle);
  mainContent.appendChild(todoList);
  mainContent.appendChild(addTodoButton);

  modal.appendChild(modalOverLay);

  root.appendChild(sidebar);
  root.appendChild(mainContent);
  root.appendChild(modal);

  addButton.textContent = 'Add Project';
  addTodoButton.textContent = 'Add Todo';

  addButton.addEventListener('click', handleAddProject);
  addTodoButton.addEventListener('click', handleAddTodo);

  modal.style.display = 'none';
}

setupDOM();

function renderProjects(){
    projectList.innerHTML = ''
    appState.projects.forEach((proj,index)=>{
        const projDiv = document.createElement('div')
        projDiv.textContent = proj.name
        projDiv.addEventListener('click',()=> handleSelectProject(index))
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'X'
        deleteBtn.addEventListener('click',(e)=>{
            e.stopPropagation()
            handleDeleteProject(index)
        })
        projDiv.appendChild(deleteBtn)
        projectList.appendChild(projDiv) 
    })
}

function renderTodos(project){
    todoList.innerHTML = ''
    projectTitle.textContent = project.name
    project.todos.forEach((todo,index)=>{
        const todoEl = createTodoElement(todo,index)
        todoList.appendChild(todoEl)
    })
}

function createTodoElement(todo,index){
    const todoDiv = document.createElement('div')
    const title = document.createElement('span')
    const dueDate = document.createElement('span')
    const deleteBtn = document.createElement('button')
    const checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    checkbox.addEventListener('change',()=>{
        handleToggleComplete(selectedProjectIndex,index)
    })

    title.textContent = todo.title
    dueDate.textContent = todo.dueDate
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click',()=>{
        handleDeleteTodo(selectedProjectIndex,index)
    })

    todoDiv.appendChild(checkbox)
    todoDiv.appendChild(title)
    todoDiv.appendChild(dueDate)
    todoDiv.appendChild(deleteBtn)

    return todoDiv
}

function handleSelectProject(index){
    selectedProjectIndex = index
    renderTodos(appState.getProject(index))
}

function handleAddProject(){
    const name = prompt('Project name : ')
    if (name){
        appState.addProject(name)
        renderProjects()
        renderTodos(appState.getProject(selectedProjectIndex))
        saveToStorage()
    }
}

function handleDeleteProject(index){
    appState.removeProject(index)
    selectedProjectIndex = 0
    renderProjects()
    if (appState.projects.length > 0){
        renderTodos(appState.getProject(0))
    } else {
        todoList.innerHTML = ''
        projectTitle.textContent = ''
    }
    saveToStorage()
}

function handleAddTodo(){
    openModal()
}

function handleDeleteTodo(projectIndex,todoIndex){
    appState.getProject(projectIndex).removeTodo(todoIndex)
    renderTodos(appState.getProject(projectIndex))
    saveToStorage()
}

function handleToggleComplete(projectIndex, todoIndex) {
  const t = appState.getProject(projectIndex).todos[todoIndex];
  t.completed = !t.completed;
  saveToStorage();
}

function openModal() {
  modal.innerHTML = '';
  
  const form = document.createElement('div');
  const titleInput = document.createElement('input');
  const descInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const prioritySelect = document.createElement('select');
  const submitBtn = document.createElement('button');
  const closeBtn = document.createElement('button');

  titleInput.placeholder = 'Title';
  descInput.placeholder = 'Description';
  dateInput.type = 'date';

  ['low', 'medium', 'high'].forEach(p => {
    const option = document.createElement('option');
    option.value = p;
    option.textContent = p;
    prioritySelect.appendChild(option);
  });

  submitBtn.textContent = 'Add Todo';
  submitBtn.addEventListener('click', () => {
    if (titleInput.value) {
      const newTodo = new todo(
        titleInput.value,
        descInput.value,
        dateInput.value,
        prioritySelect.value
      );
      appState.getProject(selectedProjectIndex).addTodo(newTodo);
      renderTodos(appState.getProject(selectedProjectIndex));
      saveToStorage();
      closeModal();
    }
  });

  closeBtn.textContent = 'Cancel';
  closeBtn.addEventListener('click', closeModal);

  form.appendChild(closeBtn);
  form.appendChild(titleInput);
  form.appendChild(descInput);
  form.appendChild(dateInput);
  form.appendChild(prioritySelect);
  form.appendChild(submitBtn);
  modal.appendChild(form);
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  modal.innerHTML = '';
}

renderProjects();
renderTodos(appState.getProject(0));

document.addEventListener('DOMContentLoaded', () => {
  setupDOM();
  renderProjects();
  renderTodos(appState.getProject(0));
});