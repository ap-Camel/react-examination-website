import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";


import { toogle } from '../../../features/modal/modalSlice';
import { setLogin } from '../../../features/user/userSlice';
import ContentRow01 from "./ContentRow01";




function ContentList01({defaultShow, content, urls}) {

    return(
        <ScrollSync>
            <div className="content">
                <div className="exam-row">
                    <ScrollSyncPane>
                        <div className="exam-row-info">
                            {
                                defaultShow.map((item, index) => {
                                    return(
                                        <p className={index % 2 === 0 ? "odd" : "even"} >{item}</p>
                                    );
                                })
                            }
                        </div>
                    </ScrollSyncPane>
                    
                    <div className="exam-row-actions">
                        <p>actions</p>
                    </div>
                </div>
                {content !== "" && content.map(item => {
                    return(
                        <ContentRow01 key={item.id} item={item} urls={urls} />
                    );
                })}
            </div>
        </ScrollSync>
    );
}


export default ContentList01;