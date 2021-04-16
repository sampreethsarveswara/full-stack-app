import { Component } from 'react';
import './Counter.css';
import CounterButton from '../counter-button/CounterButton';
class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="Counter">
        <CounterButton 
          incrementMethod={this.increment}
          decrementMethod={this.decrement}>
        </CounterButton>
        <CounterButton by={5} 
          incrementMethod={this.increment}
          decrementMethod={this.decrement}>
        </CounterButton>
        <CounterButton by={10} 
          incrementMethod={this.increment}
          decrementMethod={this.decrement}>
        </CounterButton>
        <span className="count">{this.state.counter}</span>
        <br></br>
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    );
  } 

  reset() {
    this.setState({counter: 0})
  }

  increment(by) {
    this.setState(
      (prevState) => {
        return {counter: prevState.counter + by }
      }
    );
  }

  decrement(by) {
    this.setState(
      (prevState) => {
        return {counter: prevState.counter - by }
      }
    );
  }

}

export default Counter;