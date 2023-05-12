
function Rating({ name, text, photo }) {
    return <li>
        <img src={photo} alt="" />
        <div>
            <p>{text}</p>
            <p>{name}</p>
        </div>
    </li>
}

export default Rating;