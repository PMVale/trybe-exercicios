import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    firstButton: 0,
    secondButton: 0,
    thirdButton: 0,
  }
  btnClick1 = () => {
    this.setState((pState, _props) => ({
      firstButton: pState.firstButton + 1
    }), () => {
      console.log(`Botão 1 ${this.btnColor(this.state.firstButton)}`)
    })
  };
  btnClick2 = () => {
    this.setState((pState, _props) => ({
      secondButton: pState.secondButton + 1
    }), () => {
      console.log(`Botão 2 ${this.btnColor(this.state.secondButton)}`)
    })
  };
  btnClick3 = () => {
    this.setState((pState, _props) => ({
      thirdButton: pState.thirdButton + 1
    }), () => {
      console.log(`Botão 3 ${this.btnColor(this.state.thirdButton)}`)
    })
  };
  btnColor = (num) => num % 2 === 0 ? 'green' : 'white'; 
  render() {
    return (
      <div className="App">
        <button onClick={this.btnClick1} style={ {backgroundColor: this.btnColor(this.state.firstButton)} } >{this.state.firstButton}</button>
        <button onClick={this.btnClick2} style={ {backgroundColor: this.btnColor(this.state.secondButton)} }>{this.state.secondButton}</button>
        <button onClick={this.btnClick3} style={ {backgroundColor: this.btnColor(this.state.thirdButton)} }>{this.state.thirdButton}</button>
      </div>
    );
  }
}

export default App;
