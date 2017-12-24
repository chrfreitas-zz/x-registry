import React from 'react';

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
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
                        <button type="submit" className="btn btn-default">Save changes</button>
                    </div>
                </div>
            </form>
        )
    }
}


export default Modal;
