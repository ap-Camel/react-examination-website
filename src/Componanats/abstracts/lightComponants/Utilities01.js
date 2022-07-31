import React from "react";

import SearchButton from "../../shared/SearchButoon";

function Utilities01({placeholder, data}) {
    return(
        <div className="utilities">
            <SearchButton  placeholder={placeholder} data={data} />
        </div>
    );
}


export default Utilities01;