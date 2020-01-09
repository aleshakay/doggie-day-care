import React from 'react';
import {
  Card, CardBody, Button,
  CardTitle, CardText,
} from 'reactstrap';
import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
      <div className="Employee">
        <Card>
          <CardBody>
            <CardTitle>{employee.firstName} {employee.lastName}</CardTitle>
            <CardText>{employee.phoneNumber}</CardText>
            <div><Button variant="primary">Edit {employee.id}</Button></div>
            <div><Button variant="success">Delete</Button></div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Employee;
