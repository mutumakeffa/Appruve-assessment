import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// Represents a single subscription
export const Subscription = ({subscription}) => {

    const { addSubscription } = useContext(GlobalContext);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Plan:{subscription.plan} </h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                <button onClick = {(e) => addSubscription} className="btn btn-success">{subscription.plan}</button>
            </div>
        </div>
    )
}
