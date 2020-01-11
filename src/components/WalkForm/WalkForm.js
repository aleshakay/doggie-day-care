import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  render() {
    const { walks } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} />);
    return (
      <div className="WalkForm">
        <h2>Walks</h2>
        {walkCards}
      </div>
    );
  }
}

export default WalkForm;
