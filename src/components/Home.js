import React from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';
import SingleCard from './SingleCard';

const Home = ({ movies, queriedMovies }) => {
  console.log(queriedMovies);
  console.log(movies);

  if (queriedMovies.length > 0) {
    return (
      <Container>
        <Row className="my-3">
          {queriedMovies.map((movie) => (
            <SingleCard key={uuidv4()} item={movie} />
          ))}
        </Row>
  
      </Container>
    );
  } else {
    return (
      <Container fluid>
        {movies.map((movie) => (
          <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
            <Cards movie={movie} />
          </Row>
        ))}
      </Container>
    );
  }
};

// const Home = ({ movies, queriedMovies }) => {
//   console.log(queriedMovies);
//   console.log(movies);
//   return (
//     <Container fluid>
//       {movies.map((movie) => (
//         <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
//           <Cards movie={movie} />
//         </Row>
//       ))}
//     </Container>
//   );
// };

export default Home;
