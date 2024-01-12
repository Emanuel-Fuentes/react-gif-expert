import { useState } from 'react';
import PropTypes from 'prop-types'

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
        <form onSubmit={ onSubmit } aria-label='form'>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={ onInputChange }></input>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
