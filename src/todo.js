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