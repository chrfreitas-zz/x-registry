import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { add } from '../actions/action';

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, e, formApi) => {
            dispatch(add({
                domain: values.domain,
                price: values.price
            }));

            formApi.resetAll();
        }
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)

export default Form
