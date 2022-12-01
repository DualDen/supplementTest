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
                setAdditionalTimeAndDose={props.setAdditionalTimeAndDose}
                times={props.times}
                setTimes={props.setTimes}
                setIsAdded={props.setIsAdded}
                setFrequencies={props.setFrequencies} setTime={props.setTime} selects={props.selects}
                setIsOpened={props.setIsOpened} modal={props.modal} isOpened={props.isOpened}
                setDose={props.setDose} setTimesPerDay={props.setTimesPerDay}
            />
           <div className="filters">
               <div onClick={()=> {
                   props.sort === "bioMin" ? props.setSort('bioMax') : props.setSort('bioMin');
               }} className='filtersItem first'><p>Биодобавка</p>
               <div className={props.sort === "bioMin" ? 'filtersItemSvg active'  : props.sort === "bioMax" ? 'filtersItemSvg active rotated' : "filtersItemSvg"}>
                   <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fillRule="evenodd" clipRule="evenodd" d="M0 1C5.96046e-08 0.447715 0.447715 0 1 0L17 1.37091e-06C17.5523 1.43051e-06 18 0.447717 18 1C18 1.55229 17.5523 2 17 2L1 2C0.447715 2 0 1.55228 0 1ZM0 6C5.96046e-08 5.44772 0.447715 5 1 5L11 5C11.5523 5 12 5.44772 12 6C12 6.55229 11.5523 7 11 7L1 7C0.447715 7 0 6.55228 0 6ZM0 11C0 10.4477 0.447715 10 1 10H6C6.55228 10 7 10.4477 7 11C7 11.5523 6.55228 12 6 12H1C0.447715 12 0 11.5523 0 11Z" fill="#2662C9"/>
                   </svg>
               </div>
               </div>
               <div className='filtersItem second'>Описание</div>
               <div onClick={()=> {
                   props.sort === "priceMin" ? props.setSort('priceMax') : props.setSort('priceMin');
               }} className='filtersItem third'><p>Цена за шт.</p>
                   <div className={props.sort === "priceMin" ? 'filtersItemSvg active'  : props.sort === "priceMax" ? 'filtersItemSvg active rotated' : "filtersItemSvg"}>
                       <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M0 1C5.96046e-08 0.447715 0.447715 0 1 0L17 1.37091e-06C17.5523 1.43051e-06 18 0.447717 18 1C18 1.55229 17.5523 2 17 2L1 2C0.447715 2 0 1.55228 0 1ZM0 6C5.96046e-08 5.44772 0.447715 5 1 5L11 5C11.5523 5 12 5.44772 12 6C12 6.55229 11.5523 7 11 7L1 7C0.447715 7 0 6.55228 0 6ZM0 11C0 10.4477 0.447715 10 1 10H6C6.55228 10 7 10.4477 7 11C7 11.5523 6.55228 12 6 12H1C0.447715 12 0 11.5523 0 11Z" fill="#2662C9"/>
                       </svg>
                   </div>
               </div>
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