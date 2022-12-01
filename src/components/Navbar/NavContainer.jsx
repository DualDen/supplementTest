import {connect} from "react-redux";
import Nav from "./Nav";
import {setPurpose} from "../../Redux/medications-reducer";


let mapStateToProps = (state) => {
    return {
     medications: state.medicationsReducer.medications,
        showMore: state.medicationsReducer.showMore,
        purpose: state.medicationsReducer.purpose,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      setPurpose: (purpose) => {
          dispatch(setPurpose(purpose));
      },
    }
}

let NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;