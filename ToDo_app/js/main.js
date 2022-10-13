const app = new Vue({
  el: "#ToDoApp",
  data: {
    textInput: '',
    todos: [],
    formState: 'add',
    indexOfTodoToChange: 0
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('TodoList')) || []
  },
  methods: {
    saveTodo() {
      localStorage.setItem('TodoList', JSON.stringify(this.todos))
    },
    addTodo() {
      const todo = { text: this.textInput }
      this.todos.push(todo)
      this.saveTodo()
      this.textInput = ''
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
      this.saveTodo()
    },
    changeToEditForm(index) {
      this.formState = 'edit'
      this.indexOfTodoToChange = index
      this.textInput = this.todos[index].text
    },
    editTodo() {
      const todo = { text: this.textInput}
      this.todos[this.indexOfTodoToChange] = todo
      this.saveTodo()
      this.formState = 'add'
      this.indexOfTodoToChange = 0
      this.textInput = ''
    }
  }
})
