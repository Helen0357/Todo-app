import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
const TodoList = () => {
	const todosList = useSelector(state => state.todos);
	console.log(todosList);


	return (
		<ul className='list-group'>
			{todosList.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} complete={todo.complete} />
			))}
		</ul>
	);
};

export default TodoList;
