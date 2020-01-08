import React from 'react';
import Home from '../components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }


  render() {
    return (
      <div className="App">
      <Home />
      </div>
    );
  }
}
export default App;
