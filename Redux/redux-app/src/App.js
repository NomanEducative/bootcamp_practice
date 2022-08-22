import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import HelloWorld from "./HelloWorld";
import store from "./Store";
import ButtonGroup from './ButtonGroup';


class App extends React.Component{

  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ]; 
  }
}

export default App;
