import {connect} from "react-redux";
import {
    setIsOpened,
    setMedications,
    toggleIsFetching,
    setModal,
    setTime,
    setFrequencies,
    setTimesPerDay,
    setDose, setIsAdded, setTimes, setSort, setAdditionalTimeAndDose,
} from "../../Redux/medications-reducer";
import Medications from './Medications';

let mapStateToProps = (state) => {
    return {
        medications: state.medicationsReducer.medications,
        isFetching: state.medicationsReducer.isFetching,
        modal: state.medicationsReducer.modal,
        isOpened: state.medicationsReducer.isOpened,
        selects: state.medicationsReducer.selects,
        times: state.medicationsReducer.times,
        purpose: state.medicationsReducer.purpose,
        sort: state.medicationsReducer.sort,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMedications: (medications) => {
            dispatch(setMedications(medications));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        },
        setModal: (modal) => {
            dispatch(setModal(modal))
        },
        setIsOpened: (isOpened) => {
            dispatch(setIsOpened(isOpened))
        },
        setTime: (time) => {
            dispatch(setTime(time));
        },
        setFrequencies: (frequencies) => {
            dispatch(setFrequencies(frequencies));
        },
        setTimesPerDay: (timesPerDay) => {
            dispatch(setTimesPerDay(timesPerDay));
        },
        setDose: (dose) => {
            dispatch(setDose(dose));
        },
        setIsAdded: (id) => {
            dispatch(setIsAdded(id));
        },
        setTimes: (times) => {
            dispatch(setTimes(times));
        },
        setSort: (sort) => {
            dispatch(setSort(sort));
        },
        setAdditionalTimeAndDose: (time,dose,name) => {
            dispatch(setAdditionalTimeAndDose(time,dose,name));
        }
    };
}

let MedicationsContainer = connect(mapStateToProps, mapDispatchToProps)(Medications);

export default MedicationsContainer;