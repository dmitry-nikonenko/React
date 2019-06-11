import React, { Component } from 'react';
import axios from 'axios';
import Controller from '../Controller/Controller';
import Booklist from '../Booklist/Booklist';

class Home extends Component {
  state = {
    booksData: {},
    query: '',
    genre: '',
    loading: false,
  };

  componentDidMount() {
    console.log('mount');
  }

  onSubmit = () => {
    const { query, genre } = this.state;

    this.setState({
      loading: true,
    });
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}`,
      )
      .then(res => res.data)
      .then(data => this.setState({ booksData: data, loading: false }));
  };

  inputCheck = e => {
    this.setState({ query: e.target.value });
  };

  selectChange = e => {
    this.setState({ genre: e.target.value });
  };

  render() {
    const { loading, booksData } = this.state;
    return (
      <div>
        <Controller
          onSubmit={this.onSubmit}
          inputCheck={this.inputCheck}
          selectChange={this.selectChange}
        />
        {loading && <div>loading...</div>}
        <Booklist items={booksData.items || []} />
      </div>
    );
  }
}
export default Home;
