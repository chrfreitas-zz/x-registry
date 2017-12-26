import { connect } from 'react-redux';

import FormComponent from '../components/form.component';
import { add } from '../actions/app.action';

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

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent)

export default FormContainer
