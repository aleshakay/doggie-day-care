import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import dogData from '../helpers/data/dogsData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
      <div className="App">
        <DogPen dogs={this.state.dogs} />
      </div>
    );
  }
}
export default App;
