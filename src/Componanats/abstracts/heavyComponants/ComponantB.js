import React from "react";
import { useParams } from "react-router-dom";
import ContentDetails from "../lightComponants/ContentDetails";
import ComponantA from "./ComponantA";

import UseApi from "../../../hooks/UseApi";


function ComponantB({urls, defaultShow, defaultAdd, defaultEdit, defaultDetails, heading}) {

    const {id} = useParams();

    // urls.get = `https://localhost:7276/examQuestions/${id}`;
    const newUrls = {...urls, get: `https://localhost:7276/examQuestions/${id}`}

    const[content, setContent] = React.useState("");

    React.useEffect(() => {
        async function getContent() {
            await UseApi(`${urls.getSingle}${id}`, "GET", null, (res) => {
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
            <ContentDetails
                defaultDetails={defaultDetails}
                content={content}
            />
            <ComponantA
                urls={newUrls}
                defaultShow={defaultShow}
                defaultAdd={defaultAdd}
                defaultEdit={defaultEdit}
                heading={heading}
            />
        </div>
    );
}


export default ComponantB;