import React from "react";
import {useEffect} from 'react';
import axios from 'axios';
import './Medications.css'
import Loader from "../Loader/Loader";
import Modal from "./Modal/Modal";
import {setIsOpenedAC} from "../../Redux/medications-reducer";

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

    let modalRemover = () => {
        let modal = document.querySelector('.modalOverlay');
        let appContainer = document.querySelector('.App');
        appContainer.insertAdjacentElement('afterbegin',modal);
    }
    let compareFunc = (a,b) => {
        switch(props.sort) {
            case 'bioMin':
                return b.GoodsCommercialName.localeCompare(a.GoodsCommercialName);
            case 'bioMax':
                return a.GoodsCommercialName.localeCompare(b.GoodsCommercialName);
            case 'priceMin':
                return b.CurrentPrices - a.CurrentPrices;
            case 'priceMax':
                return a.CurrentPrices - b.CurrentPrices;
        }
    }


    return (

        <div className='medicationsContainer' id='medicationsContainer'>
            <Modal
                times={props.times}
                courseMedications={props.courseMedications}
                setTimes={props.setTimes}
                setIsAdded={props.setIsAdded}
                addCourseMedications={props.addCourseMedications}
                setFrequencies={props.setFrequencies} setTime={props.setTime} selects={props.selects}
                setIsOpened={props.setIsOpened} modal={props.modal} isOpened={props.isOpened}
                setDose={props.setDose} setTimesPerDay={props.setTimesPerDay}
            />
           <div className="filters">
               <div onClick={()=> {
                   props.sort === "bioMin" ? props.setSort('bioMax') : props.setSort('bioMin');
               }} className='filtersItem first'>Биодобавка</div>
               <div className='filtersItem second'>Описание</div>
               <div onClick={()=> {
                   props.sort === "priceMin" ? props.setSort('priceMax') : props.setSort('priceMin');
               }} className='filtersItem third'>Цена за шт.</div>
           </div>
            <div className='medications'>
                {props.isFetching ? <Loader/> : props.medications
                    .sort(compareFunc)
                    .filter(f => props.purpose === "" ? f : f.Purposes.findIndex(i => props.purpose === i.Purpose) > -1)
                    .map(m => {
                    return (
                        <div className='medication' key={m.Article}>
                            <img className='medicationImg' src={m.Picture} alt=""/>
                            <span className='medicationTitle'>{m.GoodsCommercialName}</span>
                            <span className='medicationDescription'>{m.CommercialDescription}</span>
                            <span className='medicationPrice'>{m.CurrentPrices} ₽</span>
                            <button onClick={(e) => {
                                modalRemover();
                                props.setModal(m);
                                if(!props.isOpened){
                                    props.setIsOpened(true)
                                }
                                else {
                                    props.setIsOpened(false);
                                }
                            }} className={m.isAdded ? 'medicationButton added' : 'medicationButton'}>{m.isAdded ? "Добавлено" : "Добавить"}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Medications;