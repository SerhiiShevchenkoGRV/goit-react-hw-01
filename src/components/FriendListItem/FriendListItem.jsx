import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem(friend) {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={clsx(css.friendCard)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.userName)}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.onlineStatus)}>Online</p>
      ) : (
        <p className={clsx(css.offlineStatus)}>Offline</p>
      )}
    </div>
  );
}
