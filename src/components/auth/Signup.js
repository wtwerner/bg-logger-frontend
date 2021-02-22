import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../../actions/signupForm"
import { signup } from "../../actions/currentUser.js"
import { Form, Button } from 'react-bootstrap'


const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
  }

  return (
    <Form style={{width: "300px"}} onSubmit={handleOnSubmit}>
      <Form.Control placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleOnChange} />
      <Form.Control placeholder="username" value={signupFormData.email} name="email" type="text" onChange={handleOnChange} />
      <Form.Control placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleOnChange} />
      <Button style={{width: "300px"}} type="submit" value="Sign Up">Sign Up</Button>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)