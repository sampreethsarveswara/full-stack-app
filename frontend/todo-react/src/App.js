import React, { Component } from 'react';
import './App.css';
// import Counter from './components/counter/Counter';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdCompoent from './components/learning-examples/ThirdComponent';
import Todo from './components/todo-app/Todo';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      {/* <Counter></Counter> */}
    </div>
  );
}

export class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdCompoent></ThirdCompoent>
      </div>
    );
  }
}

export default App;
