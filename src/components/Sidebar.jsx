import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../UI/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

export default function Sidebar() {
    

  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon'/>
      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={TagIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Booksmarks"/>
      <SidebarOption Icon={CheckCircleOutlineIcon} text="Twitter Blue"/>
      <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
      <Button 
      variant='outlined'
      className='sidebar__tweet'
      fullWidth
      >
        Tweet
        </Button>
    </div>
  )
}
