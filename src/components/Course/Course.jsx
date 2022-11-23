import React from 'react';
import "./Course.css";
import CourseShort from "./CourseShort";
import CourseLarge from "./CourseLarge";
import {removeCourseItemTimesItem} from "../../Redux/medications-reducer";

const Course = (props) => {
    return (
        <div className={props.showMore ? "courseContainer large" : 'courseContainer'}>
         <div className='courseTitle'>
             <div className='courseIcon'>
             <svg className={props.showMore ? "rotate" : ""} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" fill="black" fillOpacity="0.72"/>
             </svg>
             </div>
             <p className='courseTitleText' onClick={() => {
                 props.showMore ? props.setShowMore(false) : props.setShowMore(true);
             }}>Мой курс приёма</p>
             <div className={props.showMore ? 'courseTitleSelect' : "courseTitleSelect none"}>
                 <select name="" id="weeks">
                     <option value="1">1 неделя</option>
                     <option value="1">2 недели</option>
                     <option value="1">3 недели</option>
                     <option value="1">4 недели</option>

                 </select>
                 <button className='courseTitleSelectButton'>Свернуть все</button>
             </div>
         </div>

            {props.showMore ? <CourseLarge
                removeCourseItemTimesItem={props.removeCourseItemTimesItem}
                removeCourseItemTimes={props.removeCourseItemTimes}
                times={props.times} courseMedications={props.courseMedications}/> : <CourseShort courseMedications={props.courseMedications}/>}
        </div>
    );
};

export default Course;