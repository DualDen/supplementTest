
let initialState = {
    cards: [],
    logo: "",
    };
    
    const mainReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_CARDS: 
    return {
        ...state,
         cards: [...action.cards],
    }
        case SET_LOGO:
            return {
                ...state,
                logo: action.logo,
            }
        default:
            return state;
    }
    
    
    }
    let SET_CARDS = "SET_CARDS";
    let SET_LOGO = "SET_LOGO";
    export let setLogoAC = (logo) => ({type: SET_LOGO, logo});
    export let setCardsAC = (cards) => ({type: SET_CARDS,cards});
    
    export default mainReducer;

