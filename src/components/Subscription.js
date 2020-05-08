import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// Represents a single subscription
export const Subscription = ({subscription}) => {

    const { addSubscription } = useContext(GlobalContext);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Plan:{subscription.plan} </h5>
                <h3 className="card-text">${subscription.price}</h3>
                <p className="card-text">{subscription.description} </p>
                <button onClick = {(e) => addSubscription} className="btn btn-success">{subscription.plan}</button>
            </div>
        </div>
    )
}
