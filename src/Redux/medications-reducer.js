
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
            if(!state.times[action.times.time]) {
                state.times[action.times.time] = [];
            }
            for(const [key,value] of Object.entries(state.times)) {
                if(key === action.times.time) {
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
                        m.additionalTimeAndDose.push({time: action.time,dose:action.dose,id:Math.random().toString(16).slice(2) });
                    }
                })
            })
            return{
                ...state,
                times: {...state.times}
            }
        case REMOVE_ADDITIONAL_TIME_AND_DOSE:
            Object.entries(state.times).map(o => {
                return o[1].map((m) => {
                    return m.additionalTimeAndDose.map((i,index) => {
                        if (i.id === action.id) {
                            m.additionalTimeAndDose.splice(index,1);
                        }

                    })
                })
            })
            return{
                ...state,
                times: {...state.times}
            }
        case REMOVE_FIRST_ADT:
            Object.entries(state.times).map(o => {
                return o[1].map((m) => {
                    m.dose = m.additionalTimeAndDose[0].dose;
                    m.time = m.additionalTimeAndDose[0].time;
                    m.additionalTimeAndDose.splice(0,1);
                })
            })
            return{
                ...state,
                times: {...state.times}
            }





        default:
            return state;
    }


}
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

