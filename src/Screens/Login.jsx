import React, { Component } from 'react'
import { Form, Row, Col, Container,Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from '../redux/actions/userAction';

 class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          email:"",
          password:""
             
        }
    }
    handleChange = (e) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit =async(e)=>{
      e.preventDefault();
     await this.props.dispatch(
        login(
          this.state.email,
          this.state.password
        )
      );
    }

    componentDidMount=()=>{
      console.log("component did mount of login called");
  
    }
    componentDidUpdate=(previousProps, previousState)=>{
       console.log("component did update of login called");

       if(previousProps!==this.props){
        if(this.props.userLoginReducer?.userInfo?.token){
          this.props.history.push('/products');
        }
       }
       
      
       
    }
  
    componentWillUnmount=()=>{
      console.log("component Will Unmount  of login called");
  
    }
  
    
    render() {
        return (
            <Container>
            <Row className="justify-content-centre mt-5">
              <Col lg="6" className="mx-auto ">
              <h5>Please Login </h5>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group  className="my-3" controlId="exampleForm.ControlInput2">
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>email</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control name="email" type="email" placeholder="your email here" onChange={this.handleChange} />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group className="my-3" controlId="exampleForm.ControlInput3">
                <Container>
                  <Row>
                    <Col lg="2">
                      <Form.Label>Password</Form.Label>
                    </Col>
                    <Col lg="10">
                      <Form.Control name="password" type="password" placeholder="your password here" onChange={this.handleChange} />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
    
                  
                  <Button type="submit">Submit</Button>
    
                </Form>
              </Col>
            </Row>
          </Container>
        )
    }

   
}
const mapStateToProps = (state) => {
  console.log("state is", state);
  return state;
};

export default connect(mapStateToProps)(Login)
