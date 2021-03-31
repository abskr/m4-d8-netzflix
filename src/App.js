import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer'
import Header from './components/Header';
import { Form, Container, Alert, Spinner } from 'react-bootstrap';



export default class App extends Component {
  state = {
    query: '',
    queriedElement: [],
    movies: [],
    queryNotFound: false,
    queryErrorFromApi: '',
    isLoading : false
  };

  handleInput = (e) => {
    this.setState({
      ...this.state,
      query: e.currentTarget.value,
      queryNotFound: false,
      queryErrorFromApi: '',
      queriedElement: [],
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state.query);
    try {
      this.setState({
      ...this.state,
      isLoading: true
    })
      const resp = await fetch(
        `http://www.omdbapi.com/?apikey=95717d44&s=${this.state.query
          .toLowerCase()
          .replaceAll(' ', '+')}`
      );
      if (resp.ok) {
        // this api resp always with ok so i have to check data.Response
        // console.log('resp ok');
        const data = await resp.json();
        if (data.Response === 'True') {
          // console.log(data);
          // i have data and change state
          this.setState({
            ...this.state,
            queriedElement: data.Search,
            queryNotFound: false,
            isLoading: false
          });
          // console.log('queriedElement:', this.state.queriedElement);
        } else {
          // here i got data.Response = False so cange the state to display allert later
          console.log(data.Error);
          this.setState({
            ...this.state,
            queryNotFound: true,
            queryErrorFromApi: data.Error,
            isLoading: false
          });
        }
      } else {
        console.log('resp not ok:', resp);
      }
    } catch (error) {
      console.log(error);
      this.setState.apply({
        isLoading: false
      })
    }
  };

  componentDidMount = async () => {
    // console.log('app mounted');
    const apiKey = '95717d44';
    const movies = ['harry potter', 'the lord of the rings', 'breaking bad'];
    const endpointAllData = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;


    try {
      this.setState({
        ...this.state.movies,
        isLoading : true,
      })
      movies.forEach(async (movie) => {
        const resp = await fetch(endpointAllData + movie.replaceAll(' ', '+'));
        if (resp.ok) {
          // console.log('resp ok');
          const data = await resp.json();
          // console.log(data.Search);
          this.setState({ movies: [...this.state.movies, data.Search] });
          console.log(this.state.movies);
              this.setState({
              ...this.state.movies,
              isLoading : false,
              })
        } else {
          console.log('something went wrong');
          this.setState({
              ...this.state.movies,
              isLoading : false,
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
    return (
        
      <>

        <Header />
        <Container fluid>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              onChange={this.handleInput}
              className='my-3 '
              type='text'
              placeholder='Search For Movies and Press Enter'
              value={this.state.query}
            />
          </Form>
          {this.state.queryNotFound && (
            <Alert variant='warning'>{this.state.queryErrorFromApi}</Alert>
          )}
        </Container>
      
     {this.state.isLoading ? 
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="light" />
        <Spinner className="mx-2" animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
      </div> 
      : 
      <div>

        <Home
          movies={this.state.movies}
          queriedMovies={this.state.queriedElement}
        />
       
      </div>}
       <Footer />
    </>
        
    );
  }
}
