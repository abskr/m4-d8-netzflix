import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer'
import Header from './components/Header';
import NavBar from './components/NavBar'
import Registration from './components/Registration'
import { BrowserRouter as Router, Route } from 'react-router-dom'



export default class App extends Component {
  state = {
    userData : {
          name: '',
          surname: '',
          email: '',
          password: '',
          birthyear: '',
          //ccnum: '',
          street: '',
          city: '',
          postalcode: '',
    }
  }

  getName = (value) => this.setState({...this.state.userData, name : value })

  updateStateFromChild = (value) => this.setState({...this.state.userData}, value)


  render() {
    return (
        
      <Router>
        <NavBar />
        <div className='App'>
          <Route path='/' exact component={Header} />
          <Route path='/home' exact component={Home} />
          <Route path='/registration' exact render={(routeProps) => ( <Registration {...routeProps} updateStateFromChild={this.updateStateFromChild} selectedValue={this.state.userData}/> )}/>
        </div>
        <Footer />
      </Router>
        
    );
  }
}
