// import '../styles/global.scss';
// import useFetchBusinesses from '../hooks/use-fetch-businesses';
// import Container from '../components/common/Container';

// const Services = () => {
//   const { businesses } = useFetchBusinesses();
//   return (
//     <Container>
//       <h1 className="title">Our Services</h1>
//       <p>{businesses ? businesses.length : 0} services available.</p>
//       <p className="text">Details about the services we offer.</p>
//     </Container>
//   );
// };

// export default Services;

// using react query instead of custom hook

import '../styles/global.scss';
import useFetchBusinesses from '../api/fetchBusinesses';
import Container from '../components/common/Container';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
  const {
    data: businesses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: useFetchBusinesses, // must be a function, not a hook
  });

  if (error) return <p>Error loading services: {error.message}</p>;

  return (
    <Container>
      <h1 className="title">Our Services</h1>
      <p>
        {isLoading
          ? 'Loading services...'
          : `${businesses ? businesses.length : 0} services available.`}
      </p>
      <p className="text">Details about the services we offer.</p>
    </Container>
  );
};

export default Services;
