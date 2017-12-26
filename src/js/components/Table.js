import React from 'react';
import PropTypes from 'prop-types'

class Table extends React.Component {

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
                    {this.props.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.domain}</td>
                            <td>{item.is}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

}

Table.propTypes = {
    items: PropTypes.array,
    load: PropTypes.func
}

export default Table;
