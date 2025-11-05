// props
// { label, onClick, color = "blue" } artinya ini semua nilainya nanti bisa dubah-ubah
function Button({ label, onClick, color = "blue" }) {
    const style = {
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        margin: "5px"
    };

    return (
        <button style={style} onClick={onClick}>{ label }</button>
    )
}
export default Button;