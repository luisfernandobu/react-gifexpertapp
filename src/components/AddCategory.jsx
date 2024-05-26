import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = ({ target }) => {
        const inputVal = target.value;
        setInputValue(inputVal)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();

        if (trimmedValue.length > 0) {
            onNewCategory(trimmedValue);
            setInputValue('');
        }
    }

    return (
        <form 
            onSubmit={ handleSubmitForm }
        >
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ handleChangeInput }
            />            
        </form>
    )
}
