import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogsData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';
import authData from '../../helpers/data/authData';
import walksData from '../../helpers/data/walksData';
import WalkForm from '../WalkForm/WalkForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import StaffRoom from '../StaffRoom/StaffRoom';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
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
      .catch((errFromEmployeeContainer) => console.error({ errFromEmployeeContainer }));
  }

  getWalks = () => {
    walksData.getWalksById(authData.getUid())
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((errFromWalkContainer) => console.error({ errFromWalkContainer }));
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
  }

  render() {
    return (
      <div className="Home">
        <div className="col-6 d-flex">
        <DogPen dogs={this.state.dogs} />
        <StaffRoom employees={this.state.employees} />
        <WalkForm walks={this.state.walks} />
        </div>
      </div>
    );
  }
}
export default Home;
