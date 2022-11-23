import React, {useState} from 'react';
import {removeCourseItemTimesItem} from "../../Redux/medications-reducer";
import CourseLargeByTime from "./CourseLargeByTime";
import CourseLargeByBio from "./CourseLargeByBio";

const CourseLarge = (props) => {
    const [by,setBy] = useState('time');
    return (
        <div>
            <div className='courseLargeBy'>
                <div onClick={() => {setBy('time')}} className={by === 'time' ? "courseLargeByItem active" : "courseLargeByItem"}>По времени приёма</div>
                <div onClick={() => {setBy('bio')}} className={by === 'bio' ? "courseLargeByItem active" : "courseLargeByItem"}>По биодобавке</div>
            </div>
            {by === 'time' ? <CourseLargeByTime
                removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                removeCourseItemTimes={props.removeCourseItemTimes}
                times={props.times}/> :
            <CourseLargeByBio removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                         times={props.times} removeCourseItemTimes={props.removeCourseItemTimes} courseMedications={props.courseMedications}/>
            }

        </div>
    );
};

export default CourseLarge;