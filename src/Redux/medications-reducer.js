
let initialState = {
    medications: [],
    isFetching: false,
    modal: {},
    };

    const medicationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MEDICATIONS:
           return {
             medications: [...action.medications],
    }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }
        case SET_MODAL:
            return{
                ...state, modal: {...action.modal},
            }
        default:
            return state;
    }


    }
    let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
    let SET_MEDICATIONS = "SET_MEDICATIONS";
    let SET_MODAL = "SET_MODAL";
    export let setMedicationsAC = (medications) => ({type: SET_MEDICATIONS,medications});
    export let toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
    export let setModalAC = (modal) => ({type: SET_MODAL, modal});

    export default medicationsReducer;

