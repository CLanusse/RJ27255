import React from 'react'

export const CustomSelect = ( {options} ) => {

    return (
        <select>
            {options.map((option) => (
                <option value={option.value}>{option.display}</option>
            ))}
        </select>
    )
}
