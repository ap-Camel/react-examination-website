import React from "react";

import './SearchButton.css';
import useClickedOutside from "../../hooks/useClickedOuside";

import SearchIcon from "./SearchIcon.js";


function SearchButton({placeholder, data}) {

    const [searchFilter, setSearchFilter] = React.useState([]);
    // hello

    function handleChange(event) {
        const input = event.target.value;
        let temp = data.filter(item => {
            return item.title.toLowerCase().includes(input.toLowerCase())
        })
        if(input === "" ) {
            setSearchFilter([]);
        } else {
            setSearchFilter(temp);
        }
        console.log(searchFilter);
    }

    // React.useEffect(()=>{
    //     setSearchFilter()
    // }, [])

    let searchBoxRef = useClickedOutside(() => {
        setSearchFilter([]);
    });


    return(
        <div ref={searchBoxRef} className="search">
            <div className="search-input">
                <input 
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                />
                <div className="search-icon">
                    <SearchIcon />
                </div>
            </div>
            {
                searchFilter.length != 0 && 
                <div className="search-result" >
                {searchFilter.slice(0, 6).map(item => {
                    return(
                        <a className="data-item" href="#"> 
                            {item.title}
                        </a>
                    );
                })}
            </div>
            }
            
        </div>
    );
}


export default SearchButton;