import React from 'react';
import { Form, Text } from 'react-form';
import PropTypes from 'prop-types';

const FormComponent = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        { formApi => (
            <form onSubmit={formApi.submitForm} className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="domain" className="col-sm-3 control-label">Domain name</label>
                    <div className="col-sm-9">
                        <Text field="domain" className="form-control" id="domain" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-3 control-label">Registran Email</label>
                    <div className="col-sm-9">
                        <Text field="email" className="form-control" id="email" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="col-sm-3 control-label">Price</label>
                    <div className="col-sm-9">
                        <Text field="price" className="form-control" id="price" required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                        <button type="submit" className="btn btn-default">Save changes</button>
                    </div>
                </div>
            </form>
        )}
    </Form>
)

FormComponent.propTypes = {
    onSubmit: PropTypes.func
}

export default FormComponent;
