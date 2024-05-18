import React from 'react';

const User = ({ user }) => {
  const { avatar_url, followers, following, login, created_at } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="用戶頭像" />
      </div>
      <div className="name-content">
        <a href={`http://github.com/${login}`}>{login}</a>
        <p>
          加入日期 :
          {` ${createdDate.getFullYear()}年${createdDate.toLocaleString(
            'zh-tw',
            {
              month: 'short',
            }
          )}${createdDate.getDate()}號`}
        </p>
      </div>
      <div className="profile-info">
        <p>{followers}位粉絲</p>
        <p>{following}人追蹤中</p>
      </div>
    </div>
  );
};

export default User;
