import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import clsx from "clsx";

export default function App() {
  return (
    <div className={clsx(appContainer)}>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
}
