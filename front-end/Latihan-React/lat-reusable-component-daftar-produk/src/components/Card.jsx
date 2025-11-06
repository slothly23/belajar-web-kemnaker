function Card({ title, harga, linkImg, altImg, children }) {
    const style = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        width: "150px",
        flex: '1 1 auto', 
        display: 'flex', 
        flexDirection: 'column'
    };

    const styleImg = {
        width: "100%",
        borderRadius: "8px",
        marginTop: "auto"
    }
    
    return (
        <div style={style}>
            <img src={linkImg} alt={altImg} style={styleImg}/>
            <h3 style={{margin: "auto 0 0 0"}}>{ title }</h3>  
            <p style={{color: "green", fontWeight: "bold"}}>Rp. { harga }</p>
            <div>
                { children }
            </div>
        </div>
    )
}
export default Card;