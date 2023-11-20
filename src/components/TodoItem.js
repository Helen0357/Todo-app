import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/Slices/TodoSlice';
import { deleteTodo } from '../redux/Slices/TodoSlice';
import { editTodo } from '../redux/Slices/TodoSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const TodoItem = ({ id, title, complete }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [open , setOpen]= useState(false);
	const [newEdit , setNewEdit]= useState('');
	const completeDis = useDispatch();
	const deleteIem = useDispatch();
	const editeIem = useDispatch();
	const toggleCompleteFun = () => {
		completeDis(toggleComplete({
			id: id ,
			complete: !complete
		}));
	}
	const deleteIemFun = () => {
		deleteIem(deleteTodo({
			id: id,
		}))
	}
	const editIemFun = () => {
		editeIem(editTodo({
			id: id,
			title: newEdit
		}));
		handleClose();
	}
	return (
		 <>
		

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<input style={{width: '100%' , padding: '10px' , border: '1px solid #ccc' , borderRadius: '7+px' }} defaultValue={title} type='text' onChange={(e)=> setNewEdit(e.target.value)} />
		</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editIemFun}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


		<li className={`list-group-item ${complete && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={toggleCompleteFun} checked={complete}></input>
					{title}
				</span>
				<div>
				<button className='btn btn-success mr-2' onClick={handleShow} >Edit</button>
				<button className='btn btn-danger' onClick={deleteIemFun}>Delete</button>
				</div>
			</div>
		</li>
		</>
	);
};

export default TodoItem;
