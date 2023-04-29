import { Avatar, Button } from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import MoodIcon from "@mui/icons-material/Mood";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TweetBox() {
  return (
    <div className="tweetbox">
          <Avatar className="tweetbox__avatar" />
        <form>
          <div className="tweetbox__input">
            <input placeholder="What's happening?" type="text" />
            <input placeholder="Optional: Enter image url." type="text" />
            <div className="tweetbox__options">
              <div className="tweetbox__options-icons">
                <ImageIcon className="tweetbox__opntions-icon"/>
                <GifBoxIcon className="tweetbox__opntions-icon"/>
                <BallotIcon className="tweetbox__opntions-icon"/>
                <MoodIcon className="tweetbox__opntions-icon"/>
                <LocationOnIcon className="tweetbox__opntions-icon"/>
              </div>

              <Button className="tweetbox__input-btn">Tweet</Button>
            </div>
          </div>

      </form>
    </div>
  );
}
