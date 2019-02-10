import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import './Home.css'

class Home extends Component {

  toggleDone(id) {
    this.props.store.toggleDone(id)
  }

  render() {
    return (
      <Col>
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
      </Col>
    )
  }
}

export default observer(Home)