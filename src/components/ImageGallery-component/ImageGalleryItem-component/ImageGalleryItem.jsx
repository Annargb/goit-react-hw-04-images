import { useState } from 'react';
import { ImageItemGallery, ImageOfGallery } from './ImageGalleryItem.styled';
import { ModalImg } from './Modal-component/Modal';

export const ImageGalleryItem = ({ img, tags, modalImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <ImageItemGallery>
      <ImageOfGallery src={img} alt={tags} onClick={toggleModal} />
      <ModalImg
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        img={modalImg}
        tags={tags}
      />
    </ImageItemGallery>
  );
};
