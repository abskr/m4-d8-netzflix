import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

class Registration extends Component {
  state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      birthyear: '',
      //ccnum: '',
      street: '',
      city: '',
      postalcode: ''
  };

  handleInput = (e) => {
    let id = e.target.id; // name or phone or numberOfPersons
    console.log('ID OF THIS INPUT FIELD IS', id);
    this.setState({
      ...this.state,
      [id]: e.target.value,
    });
  };

  submitData = (e) => {
    e.preventDefault();
    console.log(e)
    this.props.updateStateFromChild(e.target.value)
  };

  render() {
    return (
      <Form onSubmit={this.submitData}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ex. : "Maximillian"'
            id='name'
            value={this.props.inputName}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ex. : "Muestermann"'
            id='surname'
            value={this.state.surname}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email...'
            id='email'
            value={this.state.email}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='It should contain at least 8 chars, 1 digit, 1 letter'
            id='password'
            value={this.state.password}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your birthyear</Form.Label>
          <Form.Control
            type='number'
            placeholder='Ex : "1990"'
            id='birthyear'
            min={1910}
            value={this.state.birthyear}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mailing address</Form.Label>
          <Row className='mb-2'>
            <Col>
              <Form.Control
                type='text'
                placeholder='Street and number'
                id='street'
                value={this.state.street}
                onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Form.Control
                type='text'
                placeholder='City'
                id='city'
                value={this.state.city}
                onChange={this.handleInput}
              />
            </Col>
            <Col xs={4}>
              <Form.Control
                type='number'
                placeholder='Postal Code'
                id='postalcode'
                value={this.state.postalcode}
                onChange={this.handleInput}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant='danger' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Registration;