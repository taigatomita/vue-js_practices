// eslint-disable-next-line no-undef, no-unused-vars
const app = new Vue({
  el: "#todo-app",
  data() {
    return {
      textInput: "",
      todos: [],
      formState: "add",
      indexOfTodoToChange: 0,
    };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("TodoList")) || [];
  },
  computed: {
    isAdditionalForm() {
      return this.formState === "add";
    },
    isEditForm() {
      return this.formState === "edit";
    },
  },
  methods: {
    saveTodo() {
      localStorage.setItem("TodoList", JSON.stringify(this.todos));
    },
    addTodo() {
      const todo = { text: this.textInput };
      this.todos.push(todo);
      this.saveTodo();
      this.textInput = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodo();
    },
    changeToEditForm(index) {
      this.formState = "edit";
      this.indexOfTodoToChange = index;
      this.textInput = this.todos[index].text;
    },
    editTodo() {
      const todo = { text: this.textInput };
      this.todos[this.indexOfTodoToChange] = todo;
      this.saveTodo();
      this.formState = "add";
      this.indexOfTodoToChange = 0;
      this.textInput = "";
    },
  },
});
