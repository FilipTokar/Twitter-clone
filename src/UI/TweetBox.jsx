import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import MoodIcon from "@mui/icons-material/Mood";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import db from '../features/firebase'
import { addDoc, collection } from "firebase/firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  async function sendTweet(event) {
      event.preventDefault()
      await addDoc(collection(db, "posts"), {
        displayName: "UserName",
        userName: "@username",
        verified: true,
        text: tweetMessage,
        img: tweetImage,
        avatar: "https://w7.pngwing.com/pngs/527/287/png-transparent-computer-icons-letter-chrome-web-store-font-blue-round-letter-f-icon-miscellaneous-blue-text-thumbnail.png",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setTweetMessage("")
      setTweetImage("")
  }

  return (
    <div className="tweetbox">
          <Avatar className="tweetbox__avatar" />
        <form>
          <div className="tweetbox__input">
            <input onChange={(event) => setTweetMessage(event.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
            <input onChange={(event) => setTweetImage(event.target.value)} value={tweetImage} placeholder="Optional: Enter image url." type="text" />
            <div className="tweetbox__options">
              <div className="tweetbox__options-icons">
                <ImageIcon className="tweetbox__opntions-icon"/>
                <GifBoxIcon className="tweetbox__opntions-icon"/>
                <BallotIcon className="tweetbox__opntions-icon"/>
                <MoodIcon className="tweetbox__opntions-icon"/>
                <LocationOnIcon className="tweetbox__opntions-icon"/>
              </div>

              <Button onClick={sendTweet} type="submit" className="tweetbox__input-btn">Tweet</Button>
            </div>
          </div>

      </form>
    </div>
  );
}
