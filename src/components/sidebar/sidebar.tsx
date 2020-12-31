import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import "./sdebar.css";

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  state = {
    isOpen: false,
  };

  handleOnClose = () => this.setState({ isOpen: false });
  handleOnOpen = () => this.setState({ isOpen: true });

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Menu
          right
          onClose={this.handleOnClose}
          isOpen={isOpen}
          onOpen={this.handleOnOpen}
        >
          <Nav.Link className="text-left">Home</Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link className="text-left">Link</Nav.Link>
          <NavDropdown.Divider />
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
