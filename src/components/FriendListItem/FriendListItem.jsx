export default function FriendListItem(friend) {
  const { avatar, name, isOnline } = friend;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
}
