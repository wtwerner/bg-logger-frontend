import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm, resetSignupForm } from "../../actions/forms"
import { signup } from "../../actions/currentUser.js"
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Signup = ({ signupFormData, updateSignupForm, resetSignupForm, signup }) => {

  const history = useHistory()

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
    resetSignupForm()
    history.push('/')
  }

  return (
    <Form style={{width: "300px"}} onSubmit={handleOnSubmit}>
      <Form.Control placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleOnChange} />
      <Form.Control placeholder="email" value={signupFormData.email} name="email" type="email" onChange={handleOnChange} />
      <Form.Control placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleOnChange} />
      <Button style={{width: "300px"}} type="submit" value="Sign Up">Sign Up</Button>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.forms.signup
  }
}

export default connect(mapStateToProps, { updateSignupForm, resetSignupForm, signup })(Signup)