import React, { useEffect, useState } from 'react'
import FeedHeader from '../UI/FeedHeader'
import TweetBox from '../UI/TweetBox'
import Post from '../UI/Post'
import db from "../features/firebase"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const colRef = collection(db, 'posts')
    const q = query(colRef, orderBy("timestamp", "desc"))
    onSnapshot(q, snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
      
    })
    console.log(posts)
  }, [])

  return (
    <div className='feed'>
      <FeedHeader/>
      <TweetBox/>
      {
        posts.map((post) => (
          <Post
      displayName={post.displayName}
      userName={post.userName}
      verified={post.verified}
      text={post.text}
      img={post.img}
      avatar={post.avatar}
      time={new Date(post.timestamp?.seconds * 1000).toUTCString()}/>
        ))
      }


    </div>
  )
}
