import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {Col, ListGroup, ListGroupItem, Jumbotron} from 'react-bootstrap'
import './Home.css'

class Home extends Component {

  // Handle list item checkbox click
  // Triggers store action
  toggleDone(id) {
    this.props.store.toggleDone(id)
  }

  render() {

    // Outputs ToDo items, handles task completion
    let todoList = (
      <ListGroup>
        {this.props.store.todoList.map((e) => 
          <ListGroupItem key = {e.id} className = {e.done ? 'complete' : null}>
            {e.todo}
            <input 
              onChange = {this.toggleDone.bind(this, e.id)} 
              defaultChecked = {e.done} 
              type = 'checkbox'
              className = 'center'
            >
            </input>
          </ListGroupItem>
        )}
      </ListGroup>
    )

    // Default output when ToDo list is empty
    let noItems = (
      <Jumbotron>
        <h1>No items. Please add ToDo</h1>
      </Jumbotron>
    )

    return (
      <Col>
        {this.props.store.todoList.length ? todoList : noItems}
      </Col>
    )
  }
}

export default observer(Home)