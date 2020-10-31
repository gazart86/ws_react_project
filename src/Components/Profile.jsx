import React from 'react';
import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src={'https://cdn.pixabay.com/photo/2014/10/06/20/41/panorama-476790_960_720.jpg'} alt={''}/>
      </div>
      <div>
        description
      </div>
      <div>
        My Posts
        <div>
          new post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post_1
          </div>
          <div className={s.item}>
            post_2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;