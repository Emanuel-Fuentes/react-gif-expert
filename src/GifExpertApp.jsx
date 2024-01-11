import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {
        // Validar si el valor newCategory existe en el arreglo de categories
        if( categories.includes( newCategory ) ) return;

        // Insertar el valor de newCategory en el arreglo de categories
        setCategories( [newCategory, ...categories] );
        // setCategories( ['Valorant', ...categories] );
        // setCategories( cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( (category) => ( <GifGrid key={category} category={category} /> ) )
            }
        </>
    )
}
