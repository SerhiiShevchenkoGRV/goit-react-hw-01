import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, ...friend }) => {
        return (
          <li key={id}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
}
