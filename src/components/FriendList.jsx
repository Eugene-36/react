import s from './friendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={s.list}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <div key={id}>
          <img src={avatar} alt='Avatar' width='48' />
          <p>{name}</p>
          <p className={isOnline ? s.onlineUser : s.offlineUser}>
            {isOnline ? 'online' : 'offline'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
