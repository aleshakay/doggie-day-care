import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
static propTypes = {
  walk: walkShape.walkShape,
}

render() {
  const { walk } = this.props;
  return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>{walk.dogId}</CardTitle>
              <CardSubtitle>Owner {walk.employeeId}</CardSubtitle>
              <CardText>{walk.date}</CardText>
              </CardBody>
        </Card>
      </div>
  );
}
}

export default Walk;
