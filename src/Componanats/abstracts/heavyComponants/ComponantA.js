import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import './ComponantA.css';

import Heading01 from "../lightComponants/Heading01";
import Utilities01 from "../lightComponants/Utilities01";
import ContentList01 from "../lightComponants/ContentList01";

import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";

import { setLogin } from '../../../features/user/userSlice';
import UseApi from "../../../hooks/UseApi";

function ComponantA({urls, defaultShow, defaultAdd, defaultEdit, heading}) {

    const modal = useSelector(store => store.modal);

    const[content, setContent] = React.useState("");

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
            {modal.editIsOpen && <EditModal key="editModal" url={urls.put} />}
            <Heading01 key="examsHeading" heading={heading} />
            <Utilities01 key="examsUtilities" placeholder={heading} data={content}/>
            <ContentList01 key="examsList" defaultShow={defaultShow} content={content} urls={urls} defaultEdit={defaultEdit}/>
        </div>
    );
}



export default ComponantA;