function PetInfo (props) {
    const {animal, age, hasPet} = props;
    
    return hasPet
    ? <h1>{`My ${animal} is ${age} years old`}</h1>
    : <h1>I dont have a pet</h1>;
}

export default PetInfo