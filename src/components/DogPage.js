import React from 'react';
import { useParams } from 'react-router-dom';
import dogList from '../db.json';

function DogPage(){
    const {dogname} = useParams()
    const data = JSON.parse(JSON.stringify(dogList))
    const particularDog = data.dogs.filter((dog) => {
        if (dog.name === dogname){
            return dog
        }
    })
    const {name, age, src, facts} = particularDog[0];

    return (
        <div className='dogProfile' >
            <h3>{name}</h3>
            <img src={require(`../../public/${src}.jpg`)} alt='No Image'></img>
            <p>Age: {age}</p>
            <ul>
                {facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogPage;