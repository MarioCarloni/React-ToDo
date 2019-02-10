import React, { Component } from 'react';
import './App.css';
import Store from '../Store/Store';
import {decorate, observable, action, computed} from 'mobx';
import {Container, Row} from 'react-bootstrap'
import Home from '../Components/Home/Home'
import Header from '../Components/Header/Header'

decorate(Store, {
  todoList: observable,
  addTodo: action,
  toggleDone: action,
  todoCount: computed,
  removeChecked: action
});

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
