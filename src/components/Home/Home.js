import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogsData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';
import authData from '../../helpers/data/authData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import StaffRoom from '../StaffRoom/StaffRoom';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  getDogs = () => {
    dogsData.getDogsByUid(authData.getUid())
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errFromDogsContainer) => console.error({ errFromDogsContainer }));
  }

  getEmployees = () => {
    employeeData.getEmployeesByUid(authData.getUid())
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errFromDogsContainer) => console.error({ errFromDogsContainer }));
  }

  addDog = (newDog) => {
    dogsData.saveDog(newDog)
      .then(() => {
        this.getDogs();
        this.setState({ showDogForm: false });
      })
      .catch((errorFromSaveBoard) => console.error({ errorFromSaveBoard }));
  }


  componentDidMount() {
    this.getDogs();
    this.getEmployees();
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
