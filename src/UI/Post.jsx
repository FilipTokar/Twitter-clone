import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const Post = forwardRef(({displayName, userName, verified, text, img, avatar,time}, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} className='post__avatar'/>
      </div>
      <div className="post__body">
        <div className="post__header">
            <div className="post__header-text">
                <h3>
                    {displayName}
                    <span className='post__header--modified'>
                       {verified ?  <VerifiedIcon className='post__ver'/> : null}
                        {userName}
                        {" - "}
                        {time}
                    </span>
                </h3>
            </div>
            <div className="post__header-description">
                <p>{text}</p>
            </div>
        </div>
        <img className='post__img' src={img} alt="" />
    
      <div className="post__footer">
        <ChatBubbleOutlineIcon/>
        <AutorenewIcon/>
        <FavoriteBorderIcon/>
        <EqualizerIcon/>
      </div>
      </div>
    </div>
  )
})

export default Post
