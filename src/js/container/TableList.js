import { connect } from 'react-redux';
import Table from '../components/Table';
import { add } from '../actions/action';

const mapStateToProps = state => {
    return {
        domains: state
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
                    domains.map(item => {
                        dispatch(add(item))
                    })
                });
        },
        checkUnregistry: (domain) => {
            const extension = domain.split('.')[1];

            if(extension.match(/cars|lol/)){
                return 'YES';
            }
        }

    }
}

const TableList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)

export default TableList
