import React from 'react';
import Profile from './components/Profile';
import user from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendsList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory'
import transactions from './transactions.json';

const App = () => {
    return (
        <div>
            <h1>React Power</h1>
            <Statistics title="Upload stats" stats={statisticalData} />;
            <Statistics stats={statisticalData}/>;
            <Profile user={user}/>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />;
        </div>
    );
};

export default App;