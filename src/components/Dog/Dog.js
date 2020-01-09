import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import './Dog.scss';
import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{dog.name}</CardTitle>
            <CardSubtitle>Owner {dog.owner}</CardSubtitle>
            <CardText>{dog.description}</CardText>
            <img width="25%" src={dog.imageURl} alt="doggie" />
        </CardBody>
      </Card>
    </div>
    );
  }
}
export default Dog;
