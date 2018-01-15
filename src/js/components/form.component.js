import React from 'react';
import { Form, Text } from 'react-form';
import PropTypes from 'prop-types';

const FormComponent = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        { formApi => (
            <form className="x-form ui form" onSubmit={formApi.submitForm}>
                <div className="field">
                    <label htmlFor="domain">Domain name</label>
                    <Text field="domain" id="domain" required/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <Text field="email" id="email" required/>
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <Text field="price" id="price" required/>
                </div>
                <button type="submit" className="ui primary basic button">Save</button>
            </form>
        )}
    </Form>
)

FormComponent.propTypes = {
    onSubmit: PropTypes.func
}

export default FormComponent;
