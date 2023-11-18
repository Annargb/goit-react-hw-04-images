import { GlobalStyle } from './Global.style';
import { Wrapper } from './App.styled';
import { Searchbar } from './Searchbar-component/Searchbar';
import { useEffect, useState } from 'react';
import { fetchImages } from 'services/api';
import { ImageGallery } from './ImageGallery-component/ImageGallery';
import { Button } from './Button-component/Button';
import { Loader } from './Loader-component/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { InfoMessage } from './InfoMessage-component/InfoMessage';

export const App = () => {
  const [request, setRequest] = useState('');
  const [newRequest, setNewRequest] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (request === '') {
      return;
    }

    async function getImages() {
      try {
        let newRequest = request.split('').slice(14).join('');
        setIsLoading(prevState => !prevState);
        setFetchError(prevState => !prevState);

        // setIsLoading(true);
        // setFetchError(false);
        setNewRequest(newRequest);

        const newImages = await fetchImages(newRequest, page);

        setImages(prevState => [...prevState, ...newImages.hits]);
        setTotal(newImages.totalHits);
      } catch (error) {
        console.log(error);
        setFetchError(prevState => !prevState);
        // setFetchError(true);
        console.log(fetchError);
        toast.error('Oops, Something went wrong! Try reloading the page!', {
          duration: 3500,
          position: 'top-right',
        });
      } finally {
        setIsLoading(prevState => !prevState);
        // setIsLoading(false);
      }
    }

    getImages();
  }, [page, request, fetchError]);

  const handleSubmit = event => {
    event.preventDefault();
    const userRequest = event.target.request.value.trim();
    if (userRequest === '') {
      toast.error('Enter data in the field to search for images', {
        duration: 2500,
        position: 'top-right',
      });
      return;
    }

    let timeId = Date.now();
    setRequest(`${timeId}/${userRequest}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit} />
      {request !== '' && !images.length && !isLoading && (
        <InfoMessage>
          We didn't find any images for request '{newRequest}'
        </InfoMessage>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {0 < images.length && images.length < total && (
        <Button onClick={handleLoadMore} />
      )}
      <GlobalStyle />
      <Toaster />
    </Wrapper>
  );
};
