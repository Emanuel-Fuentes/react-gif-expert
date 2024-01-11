


export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fEcyApShhjcXcbiKLqXSyC9ZIA5HRYde&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}




// const getTest = async() => {
//     const url = new URL('https://api.giphy.com/v1/gifs/search');
//     url.searchParams.set()
//     url.searchParams.set('api_key', 'fEcyApShhjcXcbiKLqXSyC9ZIA5HRYde');
//     url.searchParams.set('limit', 20);
//     url.searchParams.set('offset', 0);
//     url.searchParams.set('rating', 'g');
//     url.searchParams.set('lang', 'es');
//     url.searchParams.set('q', category);

//     console.log(url.toString())
//     console.log(url.href)

//     const req = await fetch(url.toString())
//     const res = await req.json()
//     console.log(res)
// }
/**
 JS tiene dos métodos nuevos: URL() - Web APIs | MDN (mozilla.org) y URLSearchParams - Web APIs | MDN (mozilla.org). Permiten construir URL's de forma más amigable que los template string y que adicionalmente hace automáticamente el URL Encode transformando los caracteres especiales como espacios a caracteres compatibles con las URL de los navegadores.

 https://developer.mozilla.org/en-US/docs/Web/API/URL/URL

 */

