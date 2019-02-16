import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {Col, ButtonToolbar, Button} from 'react-bootstrap'
import './Header.css'

class Header extends Component {

  // Local state to handle re-render on input-text change
  state = {
    inputToggle: false,
    inputText: ''
  }

  // Triggers ToDo input rendering
  toggleInput() {
    this.setState(state => ({
      inputToggle: !state.inputToggle
    }))
  }

  // Pass list filtering off to Store
  removeChecked() {
    this.props.store.removeChecked()
  }

  // Adds ToDo item to list, resets input text
  addTodo(e) {
    const uniqueId = Math.floor(Math.random() * 1000) + 1
    this.props.store.addTodo({
      id: uniqueId,
      todo: this.state.inputText,
      done: false
    })
    this.setState({inputText: ''})
    e.preventDefault()
  }

  // Saves user input to local state
  handleTextInput(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  // After component renders, set input text field
  componentDidMount() {

    this.setState((state) => {
      return {inputText: 'Enter Task Here'}
    })
  }

  render() {

    // User-defined text input to handle list item creation
    let inputForm = (
      <form onSubmit = {this.addTodo.bind(this)}>
        <input value = {this.state.inputText} onChange = {this.handleTextInput.bind(this)} type = 'text'></input>
      </form>
    )

    // Ternary operator to handle text input display
    let todoInput = ( this.state.inputToggle ? inputForm : null )

    return (
      <Col>
        <ButtonToolbar>
          <Button onClick = {this.toggleInput.bind(this)} variant = 'success'>Enter ToDo</Button>
          <Button onClick = {this.removeChecked.bind(this)} variant = 'danger'>Remove Complete</Button>
        </ButtonToolbar>
        {todoInput}
      </Col>
    )
  }
}

export default observer(Header)