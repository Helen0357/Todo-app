import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
	const count = useSelector((state) => state.todos.filter(todo => todo.complete === true));
	console.log(count);
	return <h4 className='mt-4'>Total Complete Items: {count.length}</h4>;
};

export default TotalCompleteItems;
