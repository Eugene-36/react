import s from './profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <div className={s.parentCard}>
      <div>
        <img src={avatar} alt='User avatar' />
        <p>{name}</p> <p>{tag}</p> <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li>
          <span>Views</span> <span>{views}</span>
        </li>
        <li>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
