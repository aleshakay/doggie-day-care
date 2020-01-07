import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import dogData from '../helpers/data/dogsData';
import employeeData from '../helpers/data/employeesData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StaffRoom from '../components/StaffRoom/StaffRoom';


class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogData.getAllDogs();
    const employees = employeeData.getAllEmployees();
    this.setState({ dogs, employees });
  }

  render() {
    return (
      <div className="App">
        <DogPen dogs={this.state.dogs} />
        <StaffRoom employees={this.state.employees} />
      </div>
    );
  }
}
export default App;
