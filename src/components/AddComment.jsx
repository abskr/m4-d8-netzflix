import React from 'react'
import {Button, Form} from 'react-bootstrap'

export default class AddComment extends React.Component {
    state = {
      comment : "",
      elemID : this.props.elemID,
      rate : 1
  }  
  handleNewComment = (e) => {
    let inputId = e.target.id
    this.setState({
        ...this.state.newComment,
        [inputId] : e.target.value
        })
  }

  submitData = async (e) => {
    e.preventDefault()
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.elemID}`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
                }
            })
      if (resp.ok) {
                alert('your comment has been uploaded')
                this.setState({
          
                        comment: '',
                        rate: 1,
                    
                })
            } else {
                alert('there was a problem')
            }
    } catch (error) {
      console.log(error)  
      this.setState({
                    isLoading: false,
                    isError: true})
      }
  }
  
  render() {
    return (
      <Form onSubmit={this.submitData}>
        <Form.Group >
          <Form.Label>Your Comment: </Form.Label>
          <Form.Control id="comment" as="textarea" rows={3} onChange={this.handleNewComment} value={this.state.comment}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate the book</Form.Label>
          <Form.Control as="select" id="rate"
           onChange={this.handleNewComment} value={this.state.rate}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Add comment</Button>
      </Form>
    );
  }
}
