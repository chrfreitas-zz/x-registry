import { connect } from 'react-redux';

import ListComponent from '../components/list.component';
import { add, remove } from '../actions/app.action';

const mapStateToProps = state => {
    return {
        domains: state.domains
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            fetch('../../data/domains.json')
                .then(response => {
                    return response.json()
                })
                .then(({ domains }) => {
                    domains.map(item => dispatch(add(item)))
                });
        },
        onRemove: (id) => {
            dispatch(remove(id))
        }
    }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent)

export default ListContainer
