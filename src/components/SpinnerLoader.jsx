import React from 'react'
import {Spinner} from 'react-bootstrap'

const SpinnerLoader = () => {
  return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="light" />
        <Spinner className="mx-2" animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
      </div>
    
  );
};

export default SpinnerLoader;