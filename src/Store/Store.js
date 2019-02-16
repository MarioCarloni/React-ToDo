class Store {
  
  todoList = [];
  
  // Finds list item by id, toggles bool property 'done'
  toggleDone(id) {
    let key = this.todoList.findIndex((todo) => {
      return todo.id === id
    })
    this.todoList[key].done = !this.todoList[key].done
  }

  // Filters list to items not 'done'
  removeChecked() {
    this.todoList = this.todoList.filter((item) => {
      return !item.done
    })
  }
  
  // Inserts new ToDo into list
  addTodo(e) {    
    this.todoList.push(e);
  }
  
  // Get number of items in list
  get todoCount() {
    return this.todoList.length;
  }
}

export default Store;