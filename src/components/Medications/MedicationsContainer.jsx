import {connect} from "react-redux";
import {
    setMedicationsAC,
    toggleIsFetchingAC,
    setModalAC
} from "../../Redux/medications-reducer";
import Medications from './Medications';

let mapStateToProps = (state) => {
    return {
        medications: state.medicationsReducer.medications,
        isFetching: state.medicationsReducer.isFetching,
        modal: state.medicationsReducer.modal,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMedications: (medications) => {
            dispatch(setMedicationsAC(medications));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
        setModal: (modal) => {
            dispatch(setModalAC(modal))
        },
    };
}

let MedicationsContainer = connect(mapStateToProps, mapDispatchToProps)(Medications);

export default MedicationsContainer;