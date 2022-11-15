import {connect} from "react-redux";
import {setCardsAC, setLogoAC} from "../../Redux/main-reducer";
import Cards from './Cards';

let mapStateToProps = (state) => {
    return {
        cards: state.mainReducer.cards,
        logo: state.mainReducer.logo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCards: (cards) => {
            dispatch(setCardsAC(cards));
        },
        setLogo: (logo) => {
            dispatch(setLogoAC(logo));
        },
    };
}

let CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default CardsContainer;