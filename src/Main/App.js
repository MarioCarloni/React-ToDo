import React, { Component } from 'react';
import './App.css';
import Store from '../Store/Store';
import {decorate, observable, action, computed} from 'mobx';
import {Container, Row} from 'react-bootstrap'
import Home from '../Components/Home/Home'
import Header from '../Components/Header/Header'

// Mobx built-in utility to apply decorators to classes and objects. ie. Store
// Defines how 'observed' properties will behave
decorate(Store, {
  todoList: observable,
  addTodo: action,
  toggleDone: action,
  todoCount: computed,
  removeChecked: action
});

// To be passed as 'props' into Header and Home components
const appStore = new Store()

class App extends Component {
  render() {
    return (
      <Container style = {{textAlign: 'center'}}>
        <Row>
          <Header store = {appStore} />
        </Row>
        <Row>
          <Home store = {appStore} />
        </Row>
      </Container>
    );
  }
}

export default App;
