import React, {Component} from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';
import SingleCard from './SingleCard';
import SearchBar from './SearchBar'

class Home extends Component {
    state = {
      query: '',
      queriedElement: [],
      movies: [],
      queryNotFound: false,
      queryErrorFromApi: '',
      isLoading: false
    };



    componentDidMount = async () => {
      // console.log('app mounted');
      const apiKey = '95717d44';
      const movies = ['harry potter', 'the lord of the rings', 'breaking bad'];
      const endpointAllData = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;

      try {
        this.setState({
          ...this.state,
          isLoading: true,
        })
        movies.forEach(async (movie) => {
          const resp = await fetch(endpointAllData + movie.replaceAll(' ', '+'));
          if (resp.ok) {
            // console.log('resp ok');
            const data = await resp.json();
            console.log(data);
            this.setState({
              movies: [...this.state.movies, data.Search]
            });
            console.log(this.state.movies);
            this.setState({
              ...this.state,
              isLoading: false,
            })
          } else {
            console.log('something went wrong');
            this.setState({
              ...this.state,
              isLoading: false,
              //isError : true
            })
          }
        });
      } catch (error) {
        console.log(error);
        this.setState({
          ...this.state.movies,
          //isError : ture
          isLoading: false
        });
      }
    };
  
  render() {
    //console.log(this.props.queriedMovies)
    return (
      <>
        <SearchBar />
        {this.state.queriedElement > 0
          ? <Container>
                <Row className="my-3">
                  {this.state.queriedElement.map((movie) => (
                    <SingleCard key={uuidv4()} item={movie} />
                  ))}
                </Row>
            </Container>
          : <Container fluid>
              {this.state.movies.map((movie) => (
                <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
                  <Cards movie={movie} />
                </Row>
              ))}
            </Container>}
      </>
    )
  }



}
export default Home;

