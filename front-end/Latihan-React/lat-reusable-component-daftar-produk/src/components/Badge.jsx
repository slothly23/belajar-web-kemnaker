// props
// { label, onClick, color = "blue" } artinya ini semua nilainya nanti bisa dubah-ubah
function Badge({ label, color = "blue" }) {
    const style = {
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: "12px",
        marginRight: "8px",
        fontSize: "14px"
    };

    return (
        <span style={style}>{ label }</span> 
    )
}
export default Badge;