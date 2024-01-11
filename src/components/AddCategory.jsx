import { useState } from "react"

export const AddCategory = ( {
        // setCategories\
        onNewCategory
    } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        // setCategories( categories => [inputValue, ...categories]); // Funciona
        // setCategories( [inputValue, ...cat] ); // No funciona
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={ onInputChange }></input>
        </form>
    )
}
