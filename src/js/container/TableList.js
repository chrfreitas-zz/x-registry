import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = state => {
    return {
        items: state
    }
}

const mapDispatchToProps = () => {
    return {}
}

const TableList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)

export default TableList
