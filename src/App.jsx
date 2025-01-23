import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div className="appContainer">
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
