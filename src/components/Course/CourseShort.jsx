import React from 'react';
import CourseDescription from "./CourseDescription";

const CourseShort = (props) => {
    return (
        <div>
            {props.courseMedications.length === 0 ? <CourseDescription/> : props.courseMedications.map(c => {
                return (
                    <div key={c.Article} className='courseItem'>
                        <div className='courseImgContainer'><img className='courseImg' src={c.Picture} alt=""/></div>
                        <div className='courseText'>{c.GoodsCommercialName}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default CourseShort;