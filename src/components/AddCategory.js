import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => setInputValue(e.target.value)
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!inputValue) return;

        
        setCategories(cats => [ inputValue,...cats ])

        //Limpia el input
        setInputValue('')
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={ handleInputChange }
                type="text"
                value = {inputValue}

            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

