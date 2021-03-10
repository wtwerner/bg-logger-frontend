import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { createFriend, updateFriendForm, resetFriendForm } from '../../actions/forms'

const FriendForm = (props) => {

    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...props.friendFormData,
            [name]: value
        }
        props.updateFriendForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.createFriend(props.friendFormData)
        props.resetFriendForm()
    }

    return(
        <div style={{width: "300px"}}>
            <Form onSubmit={handleOnSubmit}>
                <Form.Control value={props.friendFormData.name} placeholder="name" name="name" type="text" onChange={handleOnChange} />
                <Button style={{width: "300px"}} value="Add Friend" type="submit">Add Friend</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friendFormData: state.forms.friend
    }
}

export default connect(mapStateToProps, { updateFriendForm, resetFriendForm, createFriend })(FriendForm)