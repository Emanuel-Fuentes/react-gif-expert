import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    test('debe de mostrar 10 gifs', () => {

        render( <GifExpertApp /> );
        
    });

})