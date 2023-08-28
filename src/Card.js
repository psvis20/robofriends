import React from "react";

const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-light-green dib br3 pa2 na grow bw shadow-5 ba">
            <img alt="foto of robot" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card