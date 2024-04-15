const name = 'Juan José !!!';

const newMessage = {
    message: 'Hola mundo',
    title: 'Fernando'
}

const getResult = (a,b) =>{
    return a +b ;
}
export const FirstApp = () => {


    return (
        // <> esto es equivalente a Fragement de React para poder insertar más de una etiqueta
        <>
            {/* <h1> { getResult(1,2) } </h1> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <h1>{ name }</h1>
            <p>Soy un Subtitutlo</p>
        </>
    )
}