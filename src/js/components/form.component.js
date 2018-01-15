import React from 'react';
import { Form, Text } from 'react-form';
import PropTypes from 'prop-types';

const FormComponent = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        { formApi => (
            <form className="x-form" onSubmit={formApi.submitForm}>
                <div>
                    <label htmlFor="domain">Domain name</label>
                    <Text field="domain" className="form-control" id="domain" required/>
                </div>
                <div>
                    <label htmlFor="email">Registran Email</label>
                    <Text field="email" className="form-control" id="email" required/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Text field="price" className="form-control" id="price" required/>
                </div>
                <button type="submit" className="btn btn-default">Save changes</button>
            </form>
        )}
    </Form>
)

FormComponent.propTypes = {
    onSubmit: PropTypes.func
}

export default FormComponent;
