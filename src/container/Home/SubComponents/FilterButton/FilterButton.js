import React from "react"
import './FilterButton.css';

const filterButton = ({ label, selected, handleChange, keyValue, value }) => {
    return (
        < div 
            className={["filter-button", selected ? "filter-selected" : ""].join(' ') }
            onClick={() => handleChange(value, keyValue)}
        > {label}</div>
    )
}

export default filterButton;