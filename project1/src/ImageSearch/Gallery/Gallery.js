import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import SearchForm from '../SearchForm/SearchForm';
import Modal from '../Modal/Modal';

class Gallery extends Component {
  state = {
    kitty: {
      hits: [],
    },
    itemSearch: '',
    pageNumber: 1,
    modal: false,
  };

  getKitties = () => {
    const { itemSearch, pageNumber } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${itemSearch}&page=${pageNumber}&per_page=12&key=12550998-530ae5b315f82cf4be429f80f`,
      )
      .then(res => res.data)
      .then(data => this.setState({ kitty: data }));
  };

  inputCheck = e => {
    this.setState({ itemSearch: e.target.value });
    this.getKitties();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemSearch !== this.state.itemSearch) {
      this.getKitties();
    }
  }

  modalClick = largeImageURL => {
    this.setState({ modal: largeImageURL });
  };

  render() {
    const { modal } = this.state;
    return (
      <>
        {modal && <Modal largeImageURL={modal} />}
        <SearchForm inputCheck={this.inputCheck} />
        <ul className="gallery">
          {this.state.kitty.hits.map(el => (
            <GalleryItem key={el.id} {...el} modalClick={this.modalClick} />
          ))}
        </ul>
      </>
    );
  }
}
export default Gallery;
