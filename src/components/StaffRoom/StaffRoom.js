import React from 'react';
import PropTypes from 'prop-types';

import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/propz/employeeShape';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const staffCards = employees.map((employee) => <Employee key={employee.id} employee={employee} />);
    return (
      <div className="StaffRoom">
        <h2>StaffRoom</h2>
        {staffCards}
      </div>
    );
  }
}

export default StaffRoom;
