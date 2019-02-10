import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {Col, ButtonToolbar, Button} from 'react-bootstrap'
import './Header.css'

class Header extends Component {

  state = {
    inputToggle: false,
    inputText: ''
  }

  toggleInput() {

    this.setState(prevState => ({
      inputToggle: !prevState.inputToggle
    }))
  }

  removeChecked() {
    this.props.store.removeChecked()
  }

  addTodo(e) {

    const uniqueId = Math.floor(Math.random() * 1000) + 1

    this.props.store.addTodo({
      id: uniqueId,
      todo: this.state.inputText,
      done: false
    })

    e.preventDefault()
  }

  handleTextInput(e) {

    this.setState({
      inputText: e.target.value
    })
  }

  render() {

    let todoInput = (
      this.state.inputToggle ? 
        <form onSubmit = {this.addTodo.bind(this)}>
          <input value = {this.state.inputText} onChange = {this.handleTextInput.bind(this)} type = 'text'></input>
        </form> : 
        null
    )

    return (
      <Col>
        <ButtonToolbar>
          <Button onClick = {this.toggleInput.bind(this)} variant = 'success'>Add ToDo</Button>
          <Button onClick = {this.removeChecked.bind(this)} variant = 'danger'>Remove Complete</Button>
        </ButtonToolbar>
        {todoInput}
      </Col>
    )
  }
}

export default observer(Header)