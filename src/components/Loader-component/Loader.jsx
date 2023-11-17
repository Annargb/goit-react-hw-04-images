import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="#3f51b5"
    wrapperStyle={{
      margin: 'auto',
      marginTop: '50px',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />
);
