import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dog({name, age, src, facts}){
    const navigate = useNavigate();
    return (
        <div className='dogFrame' onClick={() => navigate(`/dogs/${name}`)}>
            <h3>{name}</h3>
            <img src={require(`../../public/${src}.jpg`)} alt='No Image'></img>
            <p>Age: {age}</p>
            <ul>
                {facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default Dog;