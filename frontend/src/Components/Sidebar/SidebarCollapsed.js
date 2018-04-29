import React from 'react'

import './Sidebar.css'

export const SidebarCollapsed = props => {
  return (
    <div className="sidebar-collapsed-wrapper valign-wrapper" onClick={props.toggleSidebar}>
      <div>Cover Types</div>
      <i className="material-icons">arrow_forward</i>
    </div>
  )
}