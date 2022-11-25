import {connect} from "react-redux";
import Course from "./Course";
import {
    removeCourseItemTimes,
    removeCourseItemTimesItem, setBioIsOpened,
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
        setTimesIsOpened: (time) => {
            dispatch(setTimesIsOpened(time))
        },
        setBioIsOpened: (name) => {
            dispatch(setBioIsOpened(name));
        }
    }
}

let CourseContainer = connect(mapStateToProps, mapDispatchToProps)(Course);

export default CourseContainer;