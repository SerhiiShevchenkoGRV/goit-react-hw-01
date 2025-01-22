import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

export default function App() {
  return (
    <div>
      <Profile {...userData} />
    </div>
  );
}
