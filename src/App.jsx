import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

export default function App() {
  return (
    <div className="appContainer">
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
}
