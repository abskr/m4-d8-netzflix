import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
      <Container>
        <Container fluid className="my-3">
        <Row className="ml-4">
          <Col>
          <a className="text-dark" href="https://facebook.com">
            <FacebookIcon />
          </a>
          </Col>
          <Col>
          <a className="text-dark" href="https://instagram.com">
            <InstagramIcon />
          </a>
          </Col>
          <Col>
          <a className="text-dark" href="https://youtube.com">
            <YouTubeIcon />
          </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="https://google.com">Audio and Subtitles</a></li>
              <li><a className="text-dark" href="https://google.com">Media Centre</a></li>
              <li><a className="text-dark" href="https://google.com">Privacy</a></li>
              <li><a className="text-dark" href="https://google.com">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="https://google.com">Audio Description</a></li>
              <li><a className="text-dark" href="https://google.com">Investor Relations</a></li>
              <li><a className="text-dark" href="https://google.com">Legal Notices</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="https://google.com">Help Centre</a></li>
              <li><a className="text-dark" href="https://google.com">Jobs</a></li>
              <li><a className="text-dark" href="https://google.com">Cookie Preferences</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul className="list-unstyled">
              <li><a className="text-dark" href="https://google.com">Gift Cards</a></li>
              <li><a className="text-dark" href="https://google.com">Terms of Use</a></li>
              <li><a className="text-dark" href="https://google.com">Coorporate Information</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="service-code">Service Code</button>
          </Col>
        </Row>
      </Container>
      </Container>
  )
}

export default Footer