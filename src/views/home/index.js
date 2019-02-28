import React, { Component, Fragment } from "react";
import {
  Row, 
  Form,
  Button
} from "react-bootstrap";

class Home extends Component {
    state = {
        email: '',
        password: ''
    }

    componentWillReceiveProps(nextProps) {
        //valid login
        if(this.props.authentication.userDetails === '' && nextProps.authentication.userDetails !== ''){
            console.log(nextProps, "mapsstatetoprops");
        }
        //Login Error msg
        if(this.props.authentication.loginError === '' && nextProps.authentication.loginError !== '') {
            console.log(nextProps.authentication.loginError, "mapsstatetoprops");
        }
      }

    submitLogin = () => {
        const email = this.state.email;
        const password = this.state.password;        
        this.props.userLogin(email, password);
    }


    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="box-container box-container--shadow">
                            <Form>
                                <Form.Group controlId="loginForm.ControlInput1">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email Address" 
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value }) }
                                    />
                                </Form.Group>
                                <Form.Group controlId="loginForm.ControlInput2">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value }) }
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={() => this.submitLogin()}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
