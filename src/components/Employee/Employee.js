import React from 'react';
import {
  Card, CardBody,
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
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Employee;
