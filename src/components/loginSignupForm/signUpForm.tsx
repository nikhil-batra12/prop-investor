import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

class SignUpForm extends React.PureComponent<
  any,
  { showForm: boolean; handleClose: () => void; onChangeMode: () => void }
> {
  render() {
    const { showForm, handleClose, onChangeMode } = this.props;
    return (
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" size="lg" />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Enter Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" size="lg" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" size="lg" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" type="submit" block size="lg">
            Sign Up
          </Button>
          <Form.Label>
            Already have an account?{" "}
            <Button variant="link" className="pl-1 pt-0" onClick={onChangeMode}>
              Login In Now!
            </Button>
          </Form.Label>
        </Modal.Footer>
      </Form>
    );
  }
}

export default SignUpForm;
