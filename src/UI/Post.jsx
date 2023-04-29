import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export default function Post({displayName, userName, verified, text, img, avatar}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar className='post__avatar'/>
      </div>
      <div className="post__body">
        <div className="post__header">
            <div className="post__header-text">
                <h3>
                    Filip Tokár
                    <span className='post__header--modified'>
                        <VerifiedIcon className='post__ver'/>
                        @filiptokar
                    </span>
                </h3>
            </div>
            <div className="post__header-description">
                <p>This is hardcoded text</p>
            </div>
        </div>
        <img className='post__img' src="https://images.ctfassets.net/lzny33ho1g45/2hGTi8N8RkTnlC5d1hCWOf/18e1fd03f84cdcc08e7698655f8a9203/app-tips-twitter-00-hero__1_.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760" alt="" />
    
      <div className="post__footer">
        <ChatBubbleOutlineIcon/>
        <AutorenewIcon/>
        <FavoriteBorderIcon/>
        <EqualizerIcon/>
      </div>
      </div>
    </div>
  )
}
