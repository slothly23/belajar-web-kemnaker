// props
// { label, onClick, color = "blue" } artinya ini semua nilainya nanti bisa dubah-ubah
function Badge({ label, color = "blue" }) {
    const style = {
        backgroundColor: color,
        color: "white",
        padding: "2px",
        border: "none",
        borderRadius: "20px",
        margin: "5px",
        textAlign: "center"
    };

    return (
        <p style={style}>{ label }</p>
        
    )
}
export default Badge;