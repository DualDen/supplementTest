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
           <div className="filters">
               <div className='filtersItem first'>Биодобавка</div>
               <div className='filtersItem second'>Описание</div>
               <div className='filtersItem third'>Цена за шт.</div>
           </div>
            <div className='medications'>
                {props.cards.map(c => {
                    return (
                        <div className='medication'>
                            <img className='medicationImg' src={c.Picture} alt=""/>
                            <span className='medicationTitle'>{c.GoodsCommercialName}</span>
                            <span className='medicationDescription'>{c.CommercialDescription}</span>
                            <span className='medicationPrice'>{c.CurrentPrices} ₽</span>
                            <button className='medicationButton'>Добавить</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Cards;