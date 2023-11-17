import { Component } from 'react';
import { ImageItemGallery, ImageOfGallery } from './ImageGalleryItem.styled';
import { ModalImg } from './Modal-component/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { img, tags, modalImg } = this.props;

    return (
      <ImageItemGallery>
        <ImageOfGallery src={img} alt={tags} onClick={this.toggleModal} />
        <ModalImg
          isOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          img={modalImg}
          tags={tags}
        />
      </ImageItemGallery>
    );
  }
}
