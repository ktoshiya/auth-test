import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {name: "Hello"};
  }
  render() {
    setTimeout(
      () => { this.setState({name: "World"}); }
      , 3000
      );
    return (
      <div className="container">
        <p>Profile</p>
        <p>{this.state.name}</p>
        <br/>
        <Link to="/">Homeへ</Link>
      </div>
    );
  }
}

export default Profile;
