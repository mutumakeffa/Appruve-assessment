import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { SubscriptionList } from './components/SubscriptionList';
import { CurrentSubscription } from './components/CurrentSubscription';

function App() {
  return (
    <div className="container">
      < Header />
      < SubscriptionList />
      < CurrentSubscription />
    
    </div>
  );
}

export default App;
