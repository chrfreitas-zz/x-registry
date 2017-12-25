import React from 'react';
import { connect } from 'react-redux'
import { add } from '../actions/action';
import PropTypes from 'prop-types';

let Modal = ({ dispatch }) => (
    <form className="form-horizontal">
        <div className="form-group">
            <label htmlFor="input1" className="col-sm-3 control-label">Domain name</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="input1" />
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="input2" className="col-sm-3 control-label">Registran Email</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="input2" />
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="input3" className="col-sm-3 control-label">Price</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="input3" />
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
                <button type="button" className="btn btn-default" onClick={() => {
                    dispatch(add({
                        email: 'chrfreitas@gmail.com',
                        is: true,
                        price: '12.00'
                    }))
                } }>Save changes</button>
            </div>
        </div>
    </form>
)

Modal.propTypes = {
    dispatch: PropTypes.func
}

Modal = connect()(Modal);

export default Modal;
