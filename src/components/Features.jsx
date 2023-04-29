import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

export default function Features() {
  return (
    <div className='features'>
      <div className="features__input">
        <SearchIcon className="features__searchIcon"/>
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="features__widget-container">
            <TwitterTweetEmbed tweetId='1649855285777899522'/>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{height: 800}}
                />
      </div>
    </div>
  )
}
