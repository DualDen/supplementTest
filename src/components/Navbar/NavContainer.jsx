import {connect} from "react-redux";
import Nav from "./Nav";


let mapStateToProps = (state) => {
    return {
     medications: state.medicationsReducer.medications,
        showMore: state.medicationsReducer.showMore,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;