import React from 'react'

export default function SidebarOption({active, Icon, text}) {
  return (
    <div className={`sidebar__option ${active && " sidebar__option--active" }`}>
        <Icon className="sidebar__option-icon"/>
        <h2 className='sidebar__option-text'>{text}</h2>
    </div>
  )
}
