import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         Age: <span>{this.props.age}</span>
       </div>
       <button onClick = {this.props.onAgeUp}>age up</button>
       <button onClick = {this.props.onAgeDown}>age down</button>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeDown: () => dispatch({type: 'AGE_DOWN'}),
    onAgeUp: () => dispatch({type: 'AGE_UP'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
