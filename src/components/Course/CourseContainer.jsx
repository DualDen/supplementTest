import {connect} from "react-redux";
import Course from "./Course";
import {
    closeAll,
    removeAdditionalTimeAndDose,
    removeCourseItemTimes,
    removeCourseItemTimesItem,
    removeFirstAdt,
    setAdditionalTimeAndDose,
    setCourseDose,
    setCourseFreq,
    setCourseTime,
    setCourseTpd,
    setShowMore,
    setTimesIsOpened
} from "../../Redux/medications-reducer";

let mapStateToProps = (state) => {
    return {
        courseMedications: state.medicationsReducer.courseMedications,
        showMore: state.medicationsReducer.showMore,
        times: state.medicationsReducer.times,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setShowMore: (showMore) => {
            dispatch(setShowMore(showMore));
        },
        removeCourseItemTimes: (time) => {
            dispatch(removeCourseItemTimes(time));
        },
        removeCourseItemTimesItem: (time,article) => {
            dispatch(removeCourseItemTimesItem(time,article))
        },
        setTimesIsOpened: (time,name) => {
            dispatch(setTimesIsOpened(time,name))
        },
        closeAll: (close) => {
            dispatch(closeAll(close));
        },
        removeAdditionalTimeAndDose: (id) => {
            dispatch(removeAdditionalTimeAndDose(id));
        },
        removeFirstAdt: (time) => {
            dispatch(removeFirstAdt(time));
        },
        setCourseTime: (name,id,time) => {
            dispatch(setCourseTime(name,id,time));
        },
        setCourseDose: (name,id,dose) => {
            dispatch(setCourseDose(name,id,dose));
        },
        setCourseFreq: (name,frequencies) => {
            dispatch(setCourseFreq(name,frequencies));
        },
        setCourseTpd: (name,timesPerDay) => {
            dispatch(setCourseTpd(name,timesPerDay));
        },
        setAdditionalTimeAndDose: (time,dose,name) => {
            dispatch(setAdditionalTimeAndDose(time,dose,name));
        }
    }
}

let CourseContainer = connect(mapStateToProps, mapDispatchToProps)(Course);

export default CourseContainer;