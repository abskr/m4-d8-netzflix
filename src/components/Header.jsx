import React, { Component } from 'react';
import '../css/header.css';


export default class Header extends Component {
  render() {
    return (
      <header>

        <div id='header-text'>
          <p className='text-light'>
            A dying man makes a desperate bid to save his family.
            <br />
            But in the meth trade, there are fates far worse than death
          </p>
          <button type='button' className='btn btn-lg mx-1 play-button'>
            <i className='fas fa-play'></i>
            Play
          </button>
          <button type='button' className='btn btn-lg btn-info text-light mx-1'>
            <i className='fas fa-info-circle'></i>
            More info
          </button>
        </div>
      </header>
    );
  }
}
