import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

class Home extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`/api/books`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="container">
        <p>Home</p>
        <ul>
          { this.state.books.map(person => <li>{person.name}</li>)}
        </ul>
        <Link to="/profile">Profileへ</Link>
        <br />
        <br />
        <Button onClick={this.handleLogout}>ログアウト</Button>
      </div>
    );
  }
}

export default Home;
