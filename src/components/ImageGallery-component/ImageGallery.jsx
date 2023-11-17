import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem-component/ImageGalleryItem';

export const ImageGallery = ({ images }) => (
  <ImageList>
    {images.map(({ webformatURL, largeImageURL, id, tags }) => (
      <ImageGalleryItem
        key={id}
        img={webformatURL}
        tags={tags}
        modalImg={largeImageURL}
      />
    ))}
  </ImageList>
);
