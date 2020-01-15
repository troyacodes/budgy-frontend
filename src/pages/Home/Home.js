import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
//BS imports
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
  return (
    <Fragment>
      <Navbar page="home" />
      <div className="fullpage home-page">
        <Container className="home-container">
          <Row className="homepage-about">
            <Col xs={12}>
              <h1>Christmas budgeting done the easy way</h1>
              <p> Budgy helps you track your gifts and spending for each of your loved ones. </p>
            </Col>
          </Row>
          <div className="homepage-getstarted-button">
            <Link to="/register" className="btn btn-white">
              Get Started
            </Link>
          </div>
          <Row>
            <Col xs={12}>
              <p className="homepage-login-button">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
