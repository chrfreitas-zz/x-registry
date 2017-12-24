import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Table from './Table';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;
    }
    render() {
        return (
            <div>
                <Table store={this.store} />
                <Modal store={this.store}/>
            </div>
        )
    }
}

App.propTypes = {
    store: PropTypes.any
}


export default App;
