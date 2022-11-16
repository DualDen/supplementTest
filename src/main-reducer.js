
let initialState = {
    cards: [],
    };
    
    const mainReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_CARDS: 
    return {
         cards: [...action.cards],
    }
        default:
            return state;
    }
    
    
    }
    let SET_CARDS = "SET_CARDS";
    export let setCardsAC = (cards) => ({type: SET_CARDS,cards});
    
    export default mainReducer;

