import React from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props);

    this.state = { count: 0 }
    this.add = this.add.bind(this)
  }

  add() {
    //this.setState({ count: this.state.count + 1 })
    this.setState((state) => {return {count: state.count + 1}})
    localStorage.setItem("state", JSON.stringify(this.state))
  }

componentDidMount () {
  this.setState(JSON.parse(localStorage.getItem('state')))
}

  render() {
    return (<div>
      <h1>Counter: {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    </div>)
  }
}

export default Counter
