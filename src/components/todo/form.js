import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const [todoItem, setTodoItem] = useState({ item: {} });

  const handleInputChange = e => {
    setTodoItem({ item: { ...todoItem.item, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(todoItem.item);
    const item = {};
    setTodoItem({ item });
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <Form.Group >
          <Form.Label>
            To Do Item
            </Form.Label>
            <Form.Control type="text" name="text" placeholder="Item Details" onChange={handleInputChange} />         
        </Form.Group>

        <Form.Group >
          <Form.Label>
            Assigned To
          </Form.Label>
            <Form.Control type="text" placeholder="Assignee name" name="assignee" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group >
          <Form.Control type="range"  defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>


        <Form.Group >
          <Button type="submit">Add Item</Button>
        </Form.Group>


      </Form>
    </>
  );

}

export default TodoForm;