import React from 'react';
import { Link } from 'react-router-dom';

function Nav({name}){

    return (
        <Link to={`/dogs/${name}`}>{name}</Link>
    )
}

export default Nav;