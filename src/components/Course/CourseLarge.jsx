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

            {by === 'time' ?
                <CourseLargeByTime
                    setCourseDose={props.setCourseDose}
                setTimesIsOpened={props.setTimesIsOpened}
                removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                removeCourseItemTimes={props.removeCourseItemTimes}
                times={props.times}/> :
            <CourseLargeByBio
                setAdditionalTimeAndDose={props.setAdditionalTimeAndDose}
                setCourseTpd={props.setCourseTpd}
                setCourseFreq={props.setCourseFreq}
                setCourseDose={props.setCourseDose}
                setCourseTime={props.setCourseTime}
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