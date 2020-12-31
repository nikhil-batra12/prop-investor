import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";

class LoginForm extends React.PureComponent<
  any,
  { showForm: boolean; handleClose: () => void; onChangeMode: () => void }
> {
  onSignIn = (googleUser) => {
    console.log(googleUser);
  };

  onFailed = (res) => console.log(res);

  render() {
    const { showForm, handleClose, onChangeMode } = this.props;
    return (
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" size="lg" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" type="submit" size="lg" block>
            Log In
          </Button>
          <Button variant="link" block>
            <GoogleLogin
              clientId="614608788173-s48a5n2q5fr119f48fm6tprgbh5299gn.apps.googleusercontent.com"
              buttonText="Sign In via Google"
              onSuccess={this.onSignIn}
              onFailure={this.onSignIn}
              cookiePolicy={"single_host_origin"}
            />
          </Button>
          <Form.Label>
            Don't have an account?
            <Button variant="link" className="pl-1 pt-0" onClick={onChangeMode}>
              Sign Up Now!
            </Button>
          </Form.Label>
        </Modal.Footer>
      </Form>
      //   </Modal>
    );
  }
}

export default LoginForm;
