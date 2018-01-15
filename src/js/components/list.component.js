import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="x-table">
                <table>
                    <thead>
                        <tr>
                            <th>Domain name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.domains.map((domain, index) => (
                            <tr key={index}>
                                <td>{domain.domain}</td>
                                <td>{domain.price}</td>
                                <td onClick={() => {this.props.onRemove(domain.id)}}>x</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

ListComponent.propTypes = {
    domains: PropTypes.array,
    load: PropTypes.func,
    onRemove: PropTypes.func
}

export default ListComponent;
