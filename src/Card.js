  import React from 'react';
const Card = ({id, name, email}) =>{
    return (
        <div className="bg-light-blue dib br3 pa1 ma2 grow tc">
            <img alt="Photos" src={`https://robohash.org/${id}?100*100`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Card;