import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import StaffRoom from '../StaffRoom/StaffRoom';


class Home extends React.Component {
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
      <div className="Home">
        <div className="col-6 d-flex">
        <DogPen dogs={this.state.dogs} />
        <StaffRoom employees={this.state.employees} />
        </div>
      </div>
    );
  }
}
export default Home;
