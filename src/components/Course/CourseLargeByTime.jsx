import React, {useState} from 'react';

const CourseLargeByTime = (props) => {
    return (
        <div>
            {
                Object.entries(props.times).sort().map(o => {
                    return (
                        <div key={o[0]} className={o[1][0].isOpened ? "courseLargeItem active" : 'courseLargeItem'}>
                            <div onClick={(e) => {
                                if (e.currentTarget.className === "courseLargeItemTitle" && e.target.tagName === 'DIV') {
                                    props.setTimesIsOpened(o[0], o[1][0].GoodsCommercialName);
                                }
                            }} className='courseLargeItemTitle'>
                                <div className='courseLargeItemIcon'>
                                    <svg className='courseLargeItemIconSvg' width="14" height="8" viewBox="0 0 14 8"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                              fill="black" fillOpacity="0.87"/>
                                    </svg>

                                </div>
                                <div className='courseLargeItemTime'>
                                    {`${o[1].length >= 1 ? o[1][0].frequencies : ""} в ${o[0]}`}
                                </div>
                                <div className='courseLargeItemDescription'>
                                    {`${o[1].length} шт: ${o[1].length >= 1 ? o[1][0].GoodsCommercialName : ""} ${o[1].length >= 2 ? "," + o[1][1].GoodsCommercialName : ""}  ${o[1].length >= 3 ? "," + o[1][2].GoodsCommercialName : ""}`}
                                </div>
                                <div onClick={() => {
                                    props.removeCourseItemTimes(o[0])
                                }} className='courseLargeItemDeleteIcon'>
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H2V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4ZM8 9C8.55228 9 9 9.44771 9 10V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9ZM11 10C11 9.44771 11.4477 9 12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10Z"
                                              fill="#A61911"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="courseLargeItemContent">
                                {o[1].map(i => {
                                    return (
                                        <div key={i.Article} className='courseLargeItemContentItem'>
                                            <img className='courseLargeItemContentItemImg' src={i.Picture} alt=""/>
                                            <div className='courseLargeItemContentItemText'>
                                                {i.GoodsCommercialName}
                                            </div>
                                            <div className='courseLargeItemContentItemSelect'>
                                                <select defaultValue={i.timeAndDose[0].dose} name="" id="doseSelect"
                                                onChange={(e) => {
                                                    props.setCourseDose(i.GoodsCommercialName,i.timeAndDose[0].id,e.currentTarget.value);

                                                }}>
                                                    <option value="1">1 таблетка</option>
                                                    <option value="2">2 таблетки</option>
                                                    <option value="3">3 таблетки</option>
                                                    <option value="4">4 таблетки</option>
                                                </select>
                                            </div>
                                            <div onClick={() => {
                                                props.removeCourseItemTimesItem(o[0], i.Article);
                                                if (o[1].length === 0) {
                                                    props.removeCourseItemTimes(o[0]);
                                                }
                                            }} className='courseLargeItemContentItemDelIcon'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                                          fill="#A61911"/>
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className='supplementFacts'>Supplement facts
                                <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292894 1.70711C-0.0976309 1.31658 -0.0976308 0.683416 0.292894 0.292892C0.683418 -0.0976326 1.31658 -0.0976326 1.70711 0.292892L7 5.58579L12.2929 0.292893C12.6834 -0.0976316 13.3166 -0.0976315 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711Z"
                                          fill="black" fillOpacity="0.87"/>
                                </svg>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CourseLargeByTime;