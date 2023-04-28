import React from 'react'

export default function FeedHeader() {
  return (
    <div className="feed__header">
        <div className="feed__header-label">
            <h2>Home</h2>
        </div>
        <div className="feed__header-options">
            <div className="feed__header-optionsLeft">
                For you
            </div>
            <div className="feed__header-optionsRight">
                Following
            </div>
        </div>
      </div>
  )
}
