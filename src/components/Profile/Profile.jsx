import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile(userData) {
  const {
    username: name,
    tag,
    location,
    avatar: image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    stats,
  } = userData;
  const keys = Object.keys(stats);

  return (
    <div className={clsx(css.profileCard)}>
      <div className={clsx(css.userDataContainer)}>
        <img
          className={clsx(css.userAvatar)}
          src={image}
          alt="User avatar"
          width="200px"
          height="200px"
        />
        <p className={clsx(css.userName)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx(css.userStatsList)}>
        {keys.map((key) => (
          <li className={clsx(css.userStatsItem)} key={tag + key}>
            <span>{key}</span>
            <span>{stats[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
