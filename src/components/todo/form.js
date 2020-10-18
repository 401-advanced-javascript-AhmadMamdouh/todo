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
          <Form.Lable>
            To Do Item
            <Form.Control type="text" name="text" placeholder="Item Details" onChange={handleInputChange} />          </Form.Lable>
        </Form.Group>

        <Form.Group >
          <Form.Lable>
            Assigned To
            <Form.Control type="text" placeholder="Assignee name" name="assignee" onChange={handleInputChange} />
          </Form.Lable>
        </Form.Group>

        <Form.Group >
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>


        <Form.Group controlId="formBasicRangeCustom">
          <Button type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>


      </Form>
    </>
  );

}

export default TodoForm;