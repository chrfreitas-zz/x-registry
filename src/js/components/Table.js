import React from 'react';
import PropTypes from 'prop-types'

const Table = ({items}) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Domain name</th>
                <th>Uniregistry</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.is}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

Table.propTypes = {
    items: PropTypes.array
}

export default Table;
