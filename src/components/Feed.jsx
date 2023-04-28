import React from 'react'
import FeedHeader from '../UI/FeedHeader'
import TweetBox from '../UI/TweetBox'

export default function Feed() {
  return (
    <div className='feed'>
      <FeedHeader/>
      <TweetBox/>
    </div>
  )
}
