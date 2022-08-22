import React, { Component } from "react";
import createAction from "./Actions";
//import photographer from "./images/girl.png";
import "./App.css";
import store from "./Store";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.handleButtonClick=this.handleButtonClick.bind(this);
  }

  handleButtonClick(amount){
    store.dispatch(createAction(amount))
  }

  render() {
    const { totalAmount, username } = store.getState();
     return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          ${totalAmount}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={()=>this.handleButtonClick(10000)}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={()=>this.handleButtonClick(5000)}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
