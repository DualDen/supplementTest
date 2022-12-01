import React, {useState} from 'react';
import './Modal.css'


const Modal = (props) => {
    let time = React.createRef();
    let timesPerDay = React.createRef();
    let frequencies = React.createRef()
    let dose = React.createRef();

    return (
        <div onClick={(e) => {
            if (e.target.className != 'modalOverlay') {
                return;
            } else {
                props.setIsOpened(false);
            }

        }} className={props.isOpened ? "modalOverlay" : "modalOverlay hide"}>
            <div className='modalContainer'>
                <div className='modalTitle'>
                    <div className='modalTitleLeft'>
                        <img className="modalImg" src={props.modal.Picture} alt=""/>
                        <div className='modalTitleLeftText'>{props.modal.GoodsCommercialName}</div>
                    </div>
                    <div className="modalTitleRight">
                        {`${props.selects.timesPerDay} ${props.selects.timesPerDay === '1' ? 'прием' :  props.selects.timesPerDay >= '5' ? 'приемов' : "приема"}: ${props.selects.time} ${props.selects.dose} шт`}
                    </div>
                </div>

                <div className='modalSelects'>
                    <div className='selectContainer'>
                        <div className='selectTitle'>Как принимать?</div>
                        <div className='frequenciesSelects'>
                            <select onChange={() => {
                                props.setFrequencies(frequencies.current.value)
                            }} ref={frequencies} name="" id="frequencies">
                                <option value="Ежедневно">Ежедневно</option>
                                <option value="Еженедельно">Еженедельно</option>
                            </select>
                        </div>
                    </div>
                    <div className='selectContainer'>
                        <div className="selectTitle">Сколько раз в день</div>
                        <div className='timesPerDaySelects'>
                            <select onChange={() => {
                                props.setTimesPerDay(timesPerDay.current.value)
                            }} ref={timesPerDay} name="" id="timesPerDay">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div className='selectContainer'>
                        <div className='selectTitle'>Время</div>
                        <input defaultValue='11:00' ref={time} onChange={(e) => {
                            props.setTime(time.current.value);
                        }} type="text"/>
                    </div>
                    <div className='selectContainer'>
                        <div className='selectTitle'>Дозировка</div>
                        <div className="doseSelects">
                            <select onChange={() => {
                                props.setDose(dose.current.value)
                            }} ref={dose} name="" id="timesPerDay">
                                <option value="1">1 таблетка</option>
                                <option value="2">2 таблетки</option>
                                <option value="3">3 таблетки</option>
                                <option value="4">4 таблетки</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='addToCourseBtnContainer'>
                <button onClick={() => {
                    let filteredTimes = Object.entries(props.times).map(o => o[1].filter(c => c.GoodsCommercialName === props.modal.GoodsCommercialName && c.time === props.selects.time));
                    if (Object.entries(props.times).length === 0) {
                        props.setTimes({frequencies: props.selects.frequencies, timesPerDay: props.selects.timesPerDay, time:props.selects.time,
                            dose: props.selects.dose, GoodsCommercialName: props.modal.GoodsCommercialName,Picture: props.modal.Picture, Article: props.modal.Article,
                            isOpened: false,
                        });
                    }
                    else if(filteredTimes[0].length === 0 && (typeof filteredTimes[1] === 'undefined' || filteredTimes[1].length === 0)) {
                        props.setTimes({frequencies: props.selects.frequencies, timesPerDay: props.selects.timesPerDay, time:props.selects.time,
                            dose: props.selects.dose, GoodsCommercialName: props.modal.GoodsCommercialName,Picture: props.modal.Picture, Article: props.modal.Article,
                            isOpened: false,
                        });
                    }
                    let filteredCm = props.courseMedications.filter(a => a.GoodsCommercialName === props.modal.GoodsCommercialName);
                    if(filteredCm.length === 0) {
                        props.addCourseMedications(props.selects,props.modal.GoodsCommercialName, props.modal.Picture,props.modal.Article);
                    }
                    props.setIsOpened(false);
                    props.setIsAdded(props.modal.Article);
                }} className='addToCourseBtn'>Добавить в курс</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;