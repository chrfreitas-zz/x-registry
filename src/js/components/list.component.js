import React from 'react';
import PropTypes from 'prop-types';

import Check from './check.component';

class ListComponent extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Domain name</th>
                        <th>Uniregistry</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.domains.map((domain, index) => (
                        <tr key={index}>
                            <td>{domain.domain}</td>
                            <td>{this.props.isUnregistry(domain.domain) ? <Check /> : null}</td>
                            <td>{domain.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

}

ListComponent.propTypes = {
    domains: PropTypes.array,
    load: PropTypes.func,
    isUnregistry: PropTypes.func
}

export default ListComponent;
