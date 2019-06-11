import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';
import styles from './MoviePage.module.css';

class MoviePage extends Component {
  state = {
    match: '',
    items: this.props.data,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.match !== this.state.match) {
      this.onCheck();
    }
  }

  onChange = e => this.setState({ match: e.target.value });

  onCheck = () => {
    const titleCheck = new RegExp(this.state.match, 'gi');
    const newArr = this.props.data.filter(el => titleCheck.test(el.title));
    console.log(newArr);
    this.setState({ items: newArr });
  };

  render() {
    const { items } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onChange={this.onChange} />
        <MovieGrid data={items} />
      </div>
    );
  }
}
export default MoviePage;
