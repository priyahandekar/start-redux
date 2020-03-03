import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './actions/actions';
import logo from "./logo.svg";

//example for redux immutable way
class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="age">
         Age: <span>{this.props.age}</span>
       </div>
       <button className="ageUp" onClick = {this.props.onAgeUp}>age up</button>
       <button className="ageDown" onClick = {this.props.onAgeDown}>age down</button>
       {this.props.loading && <img src = {logo} className="App-logo" />}
       <hr />
       <div>History</div>
       <div>
         <ul>
           {
             this.props.history.map(el => {
               return(
               <li className="historyItem" key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                 {el.age}
               </li>
             )
             })
           }
         </ul>
       </div>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onDelItem: (id) => dispatch({type: 'DEL_ITEM', key: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//------------example for redux combine multiple reducers--------

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="col">
//           <div><span>A: </span><span>{this.props.a}</span></div>
//           <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
//         </div>
//         <div className="col">
//           <div><span>B: </span><span>{this.props.b}</span></div>
//           <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//     return {
//       a: state.rA.a,
//       b: state.rB.b
//     }
//   }
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       updateA: (b) => dispatch({type: 'UPDATE_A', b:b}),
//       updateB: (a) => dispatch({type: 'UPDATE_B', a:a}),
//     }
//   }
// export default connect(mapStateToProps, mapDispatchToProps)(App);