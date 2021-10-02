import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class NavbarComp extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  linkStyle = {
    // margin: "1rem",
    margin: "10px",
    textDecoration: "none",
    color: "white",
  };

  componentDidUpdate = (previousProps, previousState) => {
   console.log('component did update of navbar called');
    if (previousProps !== this.props) {
      if (this.props.userLoginReducer?.userInfo) {
        this.setState({
          ...this.state,
          isLogin: true,
        });
      }
    }
  };

  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My App</Navbar.Brand>

            <Nav className="me-auto">
              {this.state.isLogin ? (
                <>
                  <Button>Logout</Button>

                  
                </>
              ) : (
                <>
                  <Link to="/signup" style={this.linkStyle}>
                    Signup
                  </Link>
                  <Link to="/login" style={this.linkStyle}>
                    Login
                  </Link>
                 
                </>
              )}

              {/* <Nav.Link  onClick={this.hancleClick} href="/signup" >SignUp</Nav.Link>
              <Nav.Link  onClick={this.hancleClick} href="/login" >Login</Nav.Link> */}
              <Link to="/products" style={this.linkStyle}>
                    Products
                  </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state is", state);
  return state;
};
export default connect(mapStateToProps)(NavbarComp);
