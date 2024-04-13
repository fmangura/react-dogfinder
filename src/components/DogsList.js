import React from 'react';
import Dog from './Dog'
import dogList from '../db.json';
import { useNavigate } from 'react-router-dom';

function Dogs(){
    const data = JSON.parse(JSON.stringify(dogList))
    const navigate = useNavigate()

    return (
        <div>
            <h1>Dog List</h1>
            <div className='dogs-container'>
                {data.dogs.map(({name, age, src, facts}) => {return <Dog key={`${name}-${age}`} name={name} age={age} src={src} facts={facts} />})}
            </div>
        </div>
    )
}

export default Dogs;