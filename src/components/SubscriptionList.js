import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Subscription } from './Subscription';

export const SubscriptionList = () => {

    const { subscriptions } = useContext(GlobalContext)  // Rather than always calling transaction from context.transactions, we can use destructuring

    return (
        <>
            <div className="card-deck">
                {subscriptions.map(subscription => (
                    <Subscription key={Subscription.id} subscription = {subscription}/>
                ))}
            </div>

    
        </>
    )
}