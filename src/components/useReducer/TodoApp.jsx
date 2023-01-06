import { useTodos } from "./../../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    return (
        <>
            <h2>TodoApp: {todosCount}
                <small> pendientes: { pendingTodosCount }</small></h2>
            <TodoAdd
                onNewTodo={handleNewTodo} />
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />
        </>
    )
}