import './App.css';
//COMPONENTS
import Profile from './components/Profile.jsx';
import FriendList from './components/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';

//DATA
import userData from './userData.json';
import friendList from './friends.json';
import transactionsData from './transactions.json';

function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <section>
        <Profile
          name={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </section>
      <section>
        <FriendList friends={friendList} />
      </section>

      <section>
        <TransactionHistory transactions={transactionsData} />
      </section>
    </>
  );
}

export default App;
