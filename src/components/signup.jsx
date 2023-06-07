/* this is an example of a functional component with react hooks! */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { signupUser } from '../actions';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [authorname, setAuthorName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    props.signupUser({ authorname, email, password }, navigate);
  };

  return (
    <Container className="sign-in-on">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => { setAuthorName(e.target.value); }} value={authorname} type="text" placeholder="User Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => { setEmail(e.target.value); }} value={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => { setPassword(e.target.value); }} value={password} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default connect(null, { signupUser })(SignUp);
