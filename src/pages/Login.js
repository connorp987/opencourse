import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Option,
  FormText,
  Button
} from 'reactstrap'
import NavBar from '../components/NavHome.js';

export default class Login extends Component {
  render(){
    return(
      <div>
      <NavBar />

        <Form style={formStyle}>
        <div style={inputStyle}>
        <FormGroup style={{backgroundColor: 'lightgrey'}}>
          <Label for="email">Email</Label>
          <Input style={inputStyle} type="email" name="email" id="email" placeholder="entersomething@something.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input style={inputStyle} type="password" name="password" id="examplePassword" placeholder="Enter a password" />
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>
        </div>

      </Form>
    </div>
    )

  }
}

const inputStyle = {
  maxWidth: 350
}
const formStyle = {
  padding: "4rem",
  margin: "4rem",
  maxWidth: 450,
  borderRadius: 10,
  //marginRight: "2rem",
  backgroundColor: "lightgrey",

}
