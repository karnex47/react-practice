export default state => ({
    todos: state.todo,
    totalCount: state.todo.length,
    doneCount: state.todo.filter(i => i.checked).length,
})