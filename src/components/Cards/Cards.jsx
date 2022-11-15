import React from "react";
import {useEffect} from 'react';
import axios from 'axios';
import './Cards.css'

let Cards = (props) => {
    useEffect(() => {
        axios.get('https://api.vitamin.trade/SupplementsList', {
            headers: headers,
        }).then((responce) => {
            props.setLogo(responce.data.PartnerLogo);
            props.setCards(responce.data.SupplementsList);

        });

    }, []);
    const headers = {
        'Authorization': "ers45bsGH^)()Hhj",
        "accept": "application/json",
    }
    console.log(props.logo);
    console.log(props.cards);


    return (
        <div className='cardsContainer'>
            10
        </div>
    )

}

export default Cards;