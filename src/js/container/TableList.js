import { connect } from 'react-redux';
import Table from '../components/Table';
import { add } from '../actions/action';

const mapStateToProps = state => {
    return {
        items: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            fetch('../../data/domains.json')
                .then(response => {
                    return response.json()
                })
                .then(( {domains} ) => {
                    domains.forEach(item => {
                        dispatch(add(item))
                    })
                })
        }
    }
}

const TableList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)

export default TableList
