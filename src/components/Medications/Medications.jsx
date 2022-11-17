import React from "react";
import {useEffect} from 'react';
import axios from 'axios';
import './Medications.css'
import Loader from "../Loader/Loader";
import Modal from "./Modal/Modal";

let Medications = (props) => {
    useEffect(() => {
        props.toggleIsFetching(true);
        axios.get('https://api.vitamin.trade/SupplementsList', {
            headers: headers,
        }).then((responce) => {
            props.toggleIsFetching(false);
            props.setMedications(responce.data.SupplementsList);

        });

    }, []);
    const headers = {
        'Authorization': "ers45bsGH^)()Hhj",
        "accept": "application/json",
    }

    // let modalCreator = (el) => {
    //     let appContainer = document.querySelector('.App');
    //     let modalOverlay = document.createElement('div');
    //     modalOverlay.className = 'modalOverlay';
    //     appContainer.insertAdjacentElement('afterbegin',modalOverlay);
    //     let modalContainer = document.createElement('div');
    //     modalContainer.className = 'modalContainer';
    //     modalOverlay.append(modalContainer);
    // }


    return (

        <div className='medicationsContainer' id='medicationsContainer'>
            <Modal modal={props.modal}/>
           <div className="filters">
               <div className='filtersItem first'>Биодобавка</div>
               <div className='filtersItem second'>Описание</div>
               <div className='filtersItem third'>Цена за шт.</div>
           </div>
            <div className='medications'>
                {props.isFetching ? <Loader/> : props.medications.map(m => {
                    return (
                        <div className='medication' key={m.Article}>
                            <img className='medicationImg' src={m.Picture} alt=""/>
                            <span className='medicationTitle'>{m.GoodsCommercialName}</span>
                            <span className='medicationDescription'>{m.CommercialDescription}</span>
                            <span className='medicationPrice'>{m.CurrentPrices} ₽</span>
                            <button onClick={(e) => {props.setModal(m)}} className='medicationButton'>Добавить</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Medications;