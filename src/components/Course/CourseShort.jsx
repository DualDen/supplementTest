import React from 'react';
import CourseDescription from "./CourseDescription";

const CourseShort = (props) => {

    return (
        <div>
            {Object.entries(props.times).length === 0 ? <CourseDescription/> : Object.entries(props.times).map(i => {
                return (
                    <div key={i[0]}>
                        {i[1].map(c => {
                            return (
                                <div key={c.Article} className='courseItem'>
                                    <div className='courseImgContainer'><img className='courseImg' src={c.Picture} alt=""/></div>
                                    <div className='courseText'>{c.GoodsCommercialName}</div>
                                </div>
                            )
                        })}
                    </div>
                )

            })}
        </div>
    );
};

export default CourseShort;