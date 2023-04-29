import React from 'react'
import FeedHeader from '../UI/FeedHeader'
import TweetBox from '../UI/TweetBox'
import Post from '../UI/Post'

export default function Feed() {
  return (
    <div className='feed'>
      <FeedHeader/>
      <TweetBox/>
      <Post/>
    </div>
  )
}
