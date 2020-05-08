import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// Represents a single subscription
export const Subscription = ({subscription}) => {

    const { addSubscription } = useContext(GlobalContext);
    const handleClick = (e) => addSubscription


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Plan:{subscription.plan} </h5>
                <h3 className="card-text">${subscription.price}</h3>
                <p className="card-text">{subscription.description} </p>
                <button onClick = {handleClick} className="btn btn-success">Subscribe to {subscription.plan}</button>
            </div>
        </div>
    )
}
