
let initialState = {
    medications: [],
    isFetching: false,
    modal: {
        Picture: "",
        GoodCommercialName: ""

    },
    isOpened: false,
    selects: {
        frequencies: 'Ежедневно',
        timesPerDay: '1',
        time: '11:00',
        dose: '1',

    },
    showMore: false,
    times: {


    },
    purpose: "",
    sort: "",
};

const medicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDICATIONS:
            return {
                ...state, medications: [...action.medications]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }
        case SET_MODAL:
            return {
                ...state, modal: {...action.modal},
            }
        case SET_IS_OPENED:
            return {
                ...state, isOpened: action.isOpened,
            }
        case SET_TIME:
            return {
                ...state,
                selects: {...state.selects,
                    time: action.time,}
            }
        case SET_FREQUENCIES:
            return {
                ...state,
                selects: {...state.selects,
                    frequencies: action.frequencies,}
            }
        case TIMES_PER_DAY:
            return {
                ...state,
                selects: {...state.selects,
                    timesPerDay: action.timesPerDay,}
            }
        case DOSE:
            return {
                ...state,
                selects: {...state.selects,
                    dose: action.dose,}
            }
        case SET_IS_ADDED:
            return {
                ...state,
                medications: state.medications.map(m => {
                    if (m.Article === action.id) {
                        return {
                            ...m, isAdded: true,
                        }
                    }
                    return m;
                })
            }
        case SET_SHOW_MORE:
            return {
                ...state,
                showMore: action.showMore,
            }
        case SET_TIMES:
            if(!state.times[action.times.timeAndDose[0].time]) {
                state.times[action.times.timeAndDose[0].time] = [];
            }
            for(const [key,value] of Object.entries(state.times)) {
                if(key === action.times.timeAndDose[0].time) {
                    value.push(action.times);
                }
            }
            return{
                ...state,
                times: {...state.times}
            }
        case REMOVE_COURSE_ITEM_TIMES:
            let newTimes = {...state.times};
            let medicationsCopy = [...state.medications];
            for(let i = 0; i < newTimes[action.time].length; i++) {
                medicationsCopy.map(m => {
                    if (m.GoodsCommercialName === newTimes[action.time][i].GoodsCommercialName) {
                        m.isAdded = false
                    }
                })
            }
            delete newTimes[action.time];
         return {
            ...state,
             times: newTimes,
             medications: medicationsCopy,

         }
        case REMOVE_COURSE_ITEM_TIMES_ITEM:
            let newTimesItem = {...state.times};
            newTimesItem[action.time].map((el,index) => {
                if(el.Article === action.article) {
                    newTimesItem[action.time].splice(index,1);
                }
            })
            return {
                ...state,
                times: newTimesItem,
                medications: state.medications.map(m => {
                    if (m.Article === action.article) {
                        return {
                            ...m, isAdded: false,
                        }
                    }
                    return m;
                })
            }
        case SET_TIMES_IS_OPENED:
            let timesCopy = {...state.times};
            timesCopy[action.time].map(t => {
                if(t.GoodsCommercialName === action.name) {
                    t.isOpened === true ? t.isOpened = false : t.isOpened = true;
                }


            })
            return {
                ...state,
                times: timesCopy,
            }
        case SET_PURPOSE:
            return {
                ...state,
                purpose: action.purpose,
            }
        case SET_SORT:
            return{
                ...state,
                sort: action.sort,
            }
        case CLOSE_ALL:
            Object.entries(state.times).map(o => {
                return o[1].map(m => {
                    m.isOpened = false
                })
            })
            return{
                ...state,
                times: {...state.times}
            }
        case SET_ADDITIONAL_TIME_AND_DOSE:
            Object.entries(state.times).map(o => {
                return o[1].map(m => {
                    if(m.GoodsCommercialName === action.name) {
                        m.timeAndDose.push({time: action.time,dose:action.dose,id:Math.random().toString(16).slice(2) });
                    }
                })
            })
            return{
                ...state,
                times: {...state.times}
            }
        case REMOVE_ADDITIONAL_TIME_AND_DOSE:
            Object.entries(state.times).map(o => {
                return o[1].map((m,ind) => {
                    if(m.timesPerDay === action.id) {
                        m.timeAndDose.splice(m.timeAndDose.length - (m.timeAndDose.length - m.timesPerDay),m.timeAndDose.length - m.timesPerDay)

                    }
                    return m.timeAndDose.map((i,index) => {
                        if (i.id === action.id) {
                            m.timeAndDose.splice(index,1);
                            if(index === 0) {
                                let b = o[1].splice(ind,1);
                                if(!state.times[m.timeAndDose[0].time]) {
                                    state.times[m.timeAndDose[0].time] = [];
                                }
                                for(const [key,value] of Object.entries(state.times)) {
                                    if(key === m.timeAndDose[0].time) {
                                        value.push(b[0]);
                                    }
                                }
                                if(o[1].length === 0) {
                                    delete state.times[o[0]];
                                }

                            }

                        }


                    })
                })
            })
            return{
                ...state,
                times: {...state.times}
            }
        case SET_COURSE_TIME:
            Object.entries(state.times).map(o => {
                return o[1].map((m,ind) => {
                    if(m.GoodsCommercialName === action.name) {
                        m.timeAndDose.map((i,index) => {
                            if(i.id === action.id) {
                                i.time = action.time
                                if(index === 0) {
                                    let a = o[1].splice(ind,1);
                                    if(!state.times[m.timeAndDose[0].time]) {
                                        state.times[m.timeAndDose[0].time] = [];
                                    }
                                    for(const [key,value] of Object.entries(state.times)) {
                                        if(key === m.timeAndDose[0].time) {
                                            value.push(a[0]);
                                        }
                                    }
                                    if(o[1].length === 0) {
                                        delete state.times[o[0]];
                                    }
                                }

                            }
                        })
                    }
                })
            })
            return {
                ...state,
                times: {...state.times}
            }
        case SET_COURSE_DOSE:
            Object.entries(state.times).map(o => {
                return o[1].map((m) => {
                    if(m.GoodsCommercialName === action.name) {
                        m.timeAndDose.map((i) => {
                            if(i.id === action.id) {
                                i.dose = action.dose;

                            }
                        })
                    }
                })
            });
            return{
                ...state,
                times: {...state.times},
            }
        case SET_COURSE_FREQ:
            Object.entries(state.times).map(o => {
                return o[1].map((m) => {
                    if(m.GoodsCommercialName === action.name) {
                        m.frequencies = action.frequencies
                    }
                })
            });
            return {
                ...state,
                times: {...state.times}
            }
        case SET_COURSE_TPD:
            Object.entries(state.times).map(o => {
                return o[1].map((m) => {
                    if(m.GoodsCommercialName === action.name) {
                        m.timesPerDay = action.timesPerDay
                    }
                })
            });
            return {
                ...state,
                times: {...state.times}
            }






        default:
            return state;
    }


}
let SET_COURSE_TPD = 'SET_COURSE_TPD';
let SET_COURSE_FREQ = 'SET_COURSE_FREQ';
let SET_COURSE_DOSE = "SET_COURSE_DOSE";
let SET_COURSE_TIME = "SET_COURSE_TIME";
let REMOVE_FIRST_ADT = "REMOVE_FIRST_ADT";
let REMOVE_ADDITIONAL_TIME_AND_DOSE = "REMOVE_ADDITIONAL_TIME_AND_DOSE";
let SET_ADDITIONAL_TIME_AND_DOSE = "SET_ADDITIONAL_TIME_AND_DOSE"
let CLOSE_ALL = "CLOSE_ALL"
let SET_SORT = "SET_SORT";
let SET_PURPOSE = "SET_PURPOSE";
let SET_TIMES_IS_OPENED = "SET_TIMES_IS_OPENED";
let REMOVE_COURSE_ITEM_TIMES_ITEM = 'REMOVE_COURSE_ITEM_TIMES_ITEM';
let REMOVE_COURSE_ITEM_TIMES = "REMOVE_COURSE_ITEM_TIMES";
let SET_TIMES = "SET_TIMES";
let SET_SHOW_MORE = "SET_SHOW_MORE";
let SET_IS_ADDED = "SET_IS_ADDED";
let DOSE = "DOSE";
let TIMES_PER_DAY = "TIMES_PER_DAY";
let SET_FREQUENCIES = 'SET_FREQUENCIES'
let SET_TIME = "SET_TIME";
let SET_IS_OPENED = 'SET_IS_OPENED';
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let SET_MEDICATIONS = "SET_MEDICATIONS";
let SET_MODAL = "SET_MODAL";
export let setCourseTpd = (name,timesPerDay) => ({type: SET_COURSE_TPD, name,timesPerDay});
export let setCourseFreq = (name,frequencies) => ({type: SET_COURSE_FREQ, name,frequencies});
export let setCourseDose = (name,id,dose) => ({type: SET_COURSE_DOSE, name,id,dose})
export let setCourseTime = (name,id,time) => ({type:SET_COURSE_TIME,name,id,time})
export let removeFirstAdt = (time) => ({type: REMOVE_FIRST_ADT,time});
export let removeAdditionalTimeAndDose = (id) => ({type: REMOVE_ADDITIONAL_TIME_AND_DOSE,id});
export let setAdditionalTimeAndDose = (time,dose,name) => ({type: SET_ADDITIONAL_TIME_AND_DOSE, time ,dose,name})
export let closeAll = (close) => ({type: CLOSE_ALL,close})
export let setSort = (sort) => ({type: SET_SORT, sort});
export let setPurpose = (purpose) => ({type: SET_PURPOSE,purpose})
export let removeCourseItemTimesItem = (time,article) => ({type: REMOVE_COURSE_ITEM_TIMES_ITEM,time,article});
export let removeCourseItemTimes = (time) => ({type: REMOVE_COURSE_ITEM_TIMES, time});
export let setTimes = (times) => ({type: SET_TIMES, times});
export let setShowMore = (showMore) => ({type: SET_SHOW_MORE, showMore})
export let setIsAdded = (id) => ({type: SET_IS_ADDED, id});
export let setFrequencies = (frequencies) => ({type: SET_FREQUENCIES, frequencies})
export let setTimesPerDay = (timesPerDay) => ({type: TIMES_PER_DAY, timesPerDay})
export let setDose = (dose) => ({type: DOSE, dose})
export let setTime = (time) => ({type: SET_TIME, time});
export let setIsOpened = (isOpened) => ({type: SET_IS_OPENED, isOpened})
export let setMedications = (medications) => ({type: SET_MEDICATIONS, medications});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setModal = (modal) => ({type: SET_MODAL, modal});
export let setTimesIsOpened = (time,name) => ({type: SET_TIMES_IS_OPENED,time,name})

export default medicationsReducer;

