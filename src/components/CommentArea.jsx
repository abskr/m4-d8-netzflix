import React from 'react';
import AddComment from './AddComment'
import { Alert, Button, ListGroup, Spinner } from "react-bootstrap";


export default class CommentArea extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    this.fetchComments()
  };
  
  componentDidUpdate =async(prevProps) => {
    if(prevProps.elemID !== this.props.elemID) {
      await this.fetchComments();
    }
  }

  fetchComments = async () => {
      try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.elemID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY0NzI2NTcwNDYyZTAwMTUyMTkwMjYiLCJpYXQiOjE2MTcxOTU2MjIsImV4cCI6MTYxODQwNTIyMn0.zrSxh3mTMKBTcL9qQhyb6rN7vlLdPf1sZ4S_4UHbr_0",
          },
        }
      );
      if (resp.ok) {
        let postedComments = await resp.json();
        this.setState({
          comments: postedComments,
          isLoading: false,
          isError: false,
        });
      } else {
        this.setState({
          ...this.setState,
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        ...this.setState,
        isLoading: false,
        isError: true,
      });
    }
  }

  handleDelete = async (e) => {
    console.log(e.target.value)
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e.target.value,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY0NzI2NTcwNDYyZTAwMTUyMTkwMjYiLCJpYXQiOjE2MTcxOTU2MjIsImV4cCI6MTYxODQwNTIyMn0.zrSxh3mTMKBTcL9qQhyb6rN7vlLdPf1sZ4S_4UHbr_0",
          },
        }
      );
      if (response.ok) {
        alert("This comment is removed");
      } else {
        alert("something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };



  render() {
    return (
            <div className="my-3">
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}

        {!this.state.isLoading &&
          this.state.comments.length === 0 &&
          !this.state.isError && <p>No comment for this book.</p>}

        {this.state.isError && (
          <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        )}

        {this.state.comments.map((comm) => (
          <ListGroup key={comm._id}>
            <p><i>"{comm.comment}"</i></p>
            <p>Ratings: {comm.rate}</p>

            <Button
              variant="danger"
              type="submit"
              value={comm._id}
              onClick={this.handleDelete}
                
            >Delete</Button>
            <hr />
          </ListGroup>
        ))}
        <AddComment elemID = {this.props.elemID} />
      </div>
    );
  }
}
