function Person(props) {
    const { id, firstName, lastName, email, img } = props
    return <div>
        <img src={img}></img>
        <h3>{firstName} {lastName}</h3>
        <h4>{email}</h4>
    </div>
}

export default Person