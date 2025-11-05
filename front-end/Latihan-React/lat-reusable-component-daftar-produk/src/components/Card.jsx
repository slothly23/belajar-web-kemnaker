function Card({ title, harga, linkImg, altImg, children }) {
    const style = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        width: "150px",
        overflow: "auto"
    };

    const styleImg = {
        maxWidth: "100%"
    }
    
    return (
        <div style={style}>
            <img src={linkImg} alt={altImg} style={styleImg}/>
            <h3>{ title }</h3>  
            <h4 >{ harga }</h4>
            { children }
                
        </div>
    )
}
export default Card;