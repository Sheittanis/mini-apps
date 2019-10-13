import React, { useState } from "react"
import Select from 'react-select';




const DiceRollPage = (props) => {
    const {options,setSelection } = props
    const [option, setOption] = useState(null);

    const handleChange = value => {
        setSelection(value.value) //pass to parent
        setOption(value) //set dropdown
    };

    return (
        <Select
            value={option}
            onChange={handleChange}
            options={options}
        />
    )
}

export default DiceRollPage
