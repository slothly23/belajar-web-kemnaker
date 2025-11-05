// nested components
// ada component di dalam component
function Avatar() {
    return (
        <img src="https://cdn-icons-png.freepik.com/512/7077/7077313.png" alt="avatar" />
    )
}
function Profile() {
    return (
        <div>
            <Avatar /> {/* manggil component Avatar */}
            <h3>Nama: Zalia</h3>
        </div>
    )
}
export default Profile;