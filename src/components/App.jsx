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

        setIsLoading(true);
        setFetchError(false);
        setNewRequest(newRequest);

        const newImages = await fetchImages(newRequest, page);

        setImages(prevState => [...prevState, newImages.hits]);
        setTotal(newImages.totalHits);
      } catch (error) {
        console.log(fetchError);
        setFetchError(true);
        toast.error('Oops, Something went wrong! Try reloading the page!', {
          duration: 3500,
          position: 'top-right',
        });
      } finally {
        setIsLoading(false);
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

// export class App extends Component {
//   state = {
//     request: '',
//     newRequest: '',
//     images: [],
//     page: 1,
//     error: false,
//     isLoading: false,
//     total: 0,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.request !== this.state.request ||
//       prevState.page !== this.state.page
//     ) {
//       try {
//         let newRequest = this.state.request.split('').slice(14).join('');

//         this.setState({ isLoading: true, error: false, newRequest });
//         const newImages = await fetchImages(newRequest, this.state.page);

//         this.setState(prevState => {
//           return {
//             images: [...prevState.images, ...newImages.hits],
//             total: newImages.totalHits,
//           };
//         });
//       } catch (error) {
//         this.setState({ error: true });
//         toast.error('Oops, Something went wrong! Try reloading the page!', {
//           duration: 3500,
//           position: 'top-right',
//         });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     const userRequest = event.target.request.value.trim();
//     if (userRequest === '') {
//       toast.error('Enter data in the field to search for images', {
//         duration: 2500,
//         position: 'top-right',
//       });
//       return;
//     }
//     let timeId = Date.now();
//     this.setState({
//       request: `${timeId}/${userRequest}`,
//       page: 1,
//       images: [],
//     });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };

//   render() {
//     const { isLoading, images, total, request, newRequest } = this.state;

//     return (
//       <Wrapper>
//         <Searchbar onSubmit={this.handleSubmit} />
//         {request !== '' && !images.length && !isLoading && (
//           <InfoMessage>
//             We didn't find any images for request '{newRequest}'
//           </InfoMessage>
//         )}
//         {images.length > 0 && <ImageGallery images={images} />}
//         {isLoading && <Loader />}
//         {0 < images.length && images.length < total && (
//           <Button onClick={this.handleLoadMore} />
//         )}
//         <GlobalStyle />
//         <Toaster />
//       </Wrapper>
//     );
//   }
// }
