import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/actions/userAction.js";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called",this.props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    };
  }
  componentDidMount=()=>{
    console.log("component did mount called");

  }
  componentDidUpdate=()=>{
     console.log("component did update called");
    
     if(this.props.userRegisterReducer?.userInfo?.status===201){
       this.props.history.push('/login');
     }
  }

  componentWillUnmount=()=>{
    console.log("component Will Unmount called");

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.dispatch(
      register(
        this.state.name,
        this.state.email,
        this.state.address,
        this.state.phone,
        this.state.password
      )
    );
  };


  render() {
    return (
      <Container>
        <Row className="justify-content-centre mt-5">
          <Col lg="6" className="mx-auto ">
            <h5>Sign Up </h5>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput1"
              >
                <Container>
                  <Row className="my-3 font-weight-bold ">
                    <Col lg="2">
                      <Form.Label className="font-weight-bold">Name</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control
                        name="name"
                        value={this.state.name}
                        type="text"
                        placeholder="your name here"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput2"
              >
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>email</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="your email here"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput3"
              >
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>Password</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="your password here"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput4"
              >
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>Address</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control
                        name="address"
                        type="text"
                        placeholder="your address here"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput5"
              >
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>Phone</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control
                        name="phone"
                        type="text"
                        placeholder="your phone no here"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state is", state);
  return state;
};

// const mapDispatchToProps =dispatch=>{
// return dispatch;
// }
export default connect(mapStateToProps)(SignUp);
