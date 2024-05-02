import  PropTypes  from "prop-types";

export const FirstApp = ({title, subTitle}) => {


    return (
        // <> esto es equivalente a Fragement de React para poder insertar más de una etiqueta
        <>
            {/* <h1> { getResult(1,2) } </h1> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <h1> { title } </h1>
            <p> { subTitle } </p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
}