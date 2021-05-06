import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { searchForFriend, updateFriendForm, resetFriendForm } from '../../actions/forms';

const FriendForm = (props) => {
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        const updatedFormInfo = {
            ...props.friendFormData,
            [name]: value,
        };
        props.updateFriendForm(updatedFormInfo);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.searchForFriend(props.friendFormData);
        props.resetFriendForm();
    };

    return (
        <div style={{ width: '300px', margin: '30px' }}>
            <Form inline onSubmit={handleOnSubmit}>
                <InputGroup>
                    <Form.Control
                        value={props.friendFormData.email}
                        placeholder="email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                    />
                    <Button value="Search For Friend" type="submit">
                        Add Friend by Email
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        friendFormData: state.forms.friend,
    };
};

export default connect(mapStateToProps, { updateFriendForm, resetFriendForm, searchForFriend })(FriendForm);
