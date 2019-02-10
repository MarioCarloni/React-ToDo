class Store {
  
  todoList = [];

  toggleDone(id) {

    let key = this.todoList.findIndex((todo) => {
      return todo.id === id
    })

    this.todoList[key].done = !this.todoList[key].done
  }

  removeChecked() {
    this.todoList = this.todoList.filter((item) => {
      return !item.done
    })
  }
  
  addTodo(e) {
    
    this.todoList.push(e);
  }
  
  get todoCount() {
    return this.todoList.length;
  }
}

export default Store;