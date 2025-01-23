import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.friendsContainer)}>
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
