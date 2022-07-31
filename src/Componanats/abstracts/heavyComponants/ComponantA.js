import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import './ComponantA.css';

import Heading01 from "../lightComponants/Heading01";
import Utilities01 from "../lightComponants/Utilities01";
import ContentList01 from "../lightComponants/ContentList01";

import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";

import { toogle } from '../../../features/modal/modalSlice';
import { setLogin } from '../../../features/user/userSlice';
import UseApi from "../../../hooks/UseApi";

function ComponantA({urls, defaultShow, defaultAdd, defaultEdit}) {

    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();

    const[content, setContent] = React.useState("");

    function handleAddButton() {

    }

    React.useEffect(() => {
        async function getContent() {
            await UseApi(urls.get, "GET", null, (res) => {
                setContent(res);
            });
        }
        getContent();
    }, []);

    if(content === ""){
        return(<div></div>)
    }

    return(
        <div className="wrapper">
            {modal.addIsOpen && <AddModal key="addModel" defaultAdd={defaultAdd} url={urls.post} />}
            {modal.editIsOpen && <EditModal key="editModal" />}
            <Heading01 key="examsHeading" heading="exams" />
            <Utilities01 key="examsUtilities" placeholder="exams" data={content}/>
            <ContentList01 key="examsList" defaultShow={defaultShow} content={content} urls={urls}/>
        </div>
    );
}



export default ComponantA;