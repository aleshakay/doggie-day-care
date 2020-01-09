import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Auth from '../components/Auth/Auth';
import firebaseConnection from '../helpers/data/connection';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  };

  componentWillUnmount() {
    this.removeListner();
  }

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
      <NavBar authed={authed} />
      {
        (authed) ? (<Home />) : (<Auth/>)
      }
      </div>
    );
  }
}
export default App;
