import React from 'react';

class Table extends React.Component {
    constructor(props){
        super(props);
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
                    <tr>
                        <td>foofighter.lol</td>
                        <td>Y</td>
                        <td>$12.00</td>
                    </tr>
                    <tr>
                        <td>selfdriven.cars</td>
                        <td>Y</td>
                        <td>$16.00</td>
                    </tr>
                    <tr>
                        <td>greendiamondky.com</td>
                        <td>N</td>
                        <td>$9.00</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}


export default Table;
