import React from "react";
import UseApi from "../../../hooks/UseApi";


function ContentDetails({defaultDetails, urls, content}) {

    const[details, setDetails] = React.useState(content);
    const [elements, setElements] = React.useState(Object.keys(defaultDetails));

    React.useEffect(() => {
        console.log(details);
    }, [])

    if(details === "") {
        return(
            <div>

            </div>
        );
    }


    return(
        <div className="content-details">
           {
            elements.map(key => {
                return(
                    <div className="details-element">
                        <p>{ defaultDetails[key].name }:</p>
                        <p>{ details[key] }</p>
                    </div>
                )
            })
           }
        </div>
    );
}


export default ContentDetails;