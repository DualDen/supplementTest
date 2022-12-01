import React, {useState} from 'react';
import {removeCourseItemTimesItem} from "../../Redux/medications-reducer";
import CourseLargeByTime from "./CourseLargeByTime";
import CourseLargeByBio from "./CourseLargeByBio";
import CourseDescription from "./CourseDescription";

const CourseLarge = (props) => {
    const [by,setBy] = useState('time');
    return (
        <div>
            {
               Object.entries(props.times).length === 0 ? <CourseDescription/> :
                   <div className='courseLargeBy'>
                       <div onClick={() => {setBy('time')}} className={by === 'time' ? "courseLargeByItem active" : "courseLargeByItem"}>По времени приёма</div>
                       <div onClick={() => {setBy('bio')}} className={by === 'bio' ? "courseLargeByItem active" : "courseLargeByItem"}>По биодобавке</div>
                   </div>
            }

            {by === 'time' ? <CourseLargeByTime
                setTimesIsOpened={props.setTimesIsOpened}
                removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                removeCourseItemTimes={props.removeCourseItemTimes}
                times={props.times}/> :
            <CourseLargeByBio
                removeFirstAdt={props.removeFirstAdt}
                removeAdditionalTimeAndDose={props.removeAdditionalTimeAndDose}
                setTimesIsOpened={props.setTimesIsOpened}
                removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                times={props.times} removeCourseItemTimes={props.removeCourseItemTimes}
                />
            }

        </div>
    );
};

export default CourseLarge;