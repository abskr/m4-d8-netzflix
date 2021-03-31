// import React from 'react';
// import { Button, Card, Col, Modal } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';
// import CommentArea from './CommentArea'

// class SingleCard extends React.Component {
//   state = {
//     selectedMovie: null
//   }
  
//   render() {
//     return (
//       <>
//     <Col key={uuidv4()}>
//       <Card className='mb-1' style={{ width: '8rem' }} onClick={() => this.setState({
//         selectedMovie : this.props.item.imdbID
//       })}>
//         <Card.Img variant='top' src={this.props.item.Poster} />
//       </Card>
//       {this.state.selectedMovie && <CommentArea elemID={this.state.selectedMovie}/>}
//     </Col>
    
//       </>
//       );
//     }
// }

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


// render(<Example />);
// export default SingleCard;


import React, { useState } from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import CommentArea from './CommentArea'

const SingleCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col onClick={handleShow} key={uuidv4()}>
        <Card className='my-3' style={{ width: '8rem' }}>
          <Card.Img variant='top' src={item.Poster} />
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentArea elemID={item.imdbID}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleCard;